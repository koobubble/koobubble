const phone=document.getElementById("phone");
const chat=document.getElementById("chat");
const roomTitle=document.getElementById("roomTitle");
const roomStatus=document.getElementById("roomStatus");
const searchBox=document.getElementById("searchBox");
const searchInput=document.getElementById("searchInput");
const dateSearchInput=document.getElementById("dateSearchInput");
const clearDateSearch=document.getElementById("clearDateSearch");
const composer=document.getElementById("composer");
const messageInput=document.getElementById("messageInput");
const sendBtn=document.getElementById("sendBtn");
const nicknameModal=document.getElementById("nicknameModal");
const nicknameInput=document.getElementById("nicknameInput");
const nicknamePreview=document.getElementById("nicknamePreview");
const nicknameSave=document.getElementById("nicknameSave");
const moreBtn=document.getElementById("moreBtn");

const STORAGE_KEY_MESSAGES="koobubble_my_messages_v1";
const STORAGE_KEY_NICKNAME="koobubble_nickname_v1";

roomTitle.textContent=CHATROOM.title;
roomStatus.textContent=CHATROOM.status;

function getNickname(){
  return localStorage.getItem(STORAGE_KEY_NICKNAME)||"";
}
function saveNickname(name){
  localStorage.setItem(STORAGE_KEY_NICKNAME,name);
}
function hasFinalConsonant(name){
  const s=String(name||"").trim();
  if(!s) return false;
  const last=s.charAt(s.length-1);
  const code=last.charCodeAt(0);
  if(code<0xAC00||code>0xD7A3) return false;
  return (code-0xAC00)%28!==0;
}
function naturalNickname(name){
  const s=String(name||"").trim();
  if(!s) return "";
  return hasFinalConsonant(s)?`${s}이`:s;
}
function replaceNicknameToken(text){
  return String(text||"").replaceAll("@@@",naturalNickname(getNickname()));
}
function updateNicknamePreview(){
  const raw=nicknameInput.value.trim();
  nicknamePreview.textContent=raw?`${naturalNickname(raw)} 오늘 뭐해?`:"닉네임";
}
function openNicknameModal(force=false){
  const saved=getNickname();
  if(saved&&!force) return;
  nicknameInput.value=saved;
  updateNicknamePreview();
  nicknameModal.classList.add("show");
  nicknameModal.setAttribute("aria-hidden","false");
  setTimeout(()=>nicknameInput.focus(),80);
}
function closeNicknameModal(){
  nicknameModal.classList.remove("show");
  nicknameModal.setAttribute("aria-hidden","true");
}
nicknameInput.addEventListener("input",updateNicknamePreview);
nicknameInput.addEventListener("keydown",e=>{
  if(e.key==="Enter"){e.preventDefault();nicknameSave.click();}
});
nicknameSave.addEventListener("click",()=>{
  const name=nicknameInput.value.trim();
  if(!name){nicknameInput.focus();return;}
  saveNickname(name);
  closeNicknameModal();
  render();
});
moreBtn.addEventListener("click",()=>openNicknameModal(true));

function escapeHtml(text=""){
  return String(text).replace(/[&<>"']/g,ch=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}
function dateKeyFromDate(d){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function timeKeyFromDate(d){
  return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}
function formatDate(dateStr){
  const [y,m,d]=dateStr.split("-").map(Number);
  const day=["일","월","화","수","목","금","토"][new Date(y,m-1,d).getDay()];
  return `${y}년 ${m}월 ${d}일 ${day}요일`;
}
function formatTime(timeStr){
  if(!timeStr) return "";
  const [h,m]=timeStr.split(":").map(Number);
  const ap=h<12?"오전":"오후";
  const hh=h%12||12;
  return `${ap} ${hh}:${String(m).padStart(2,"0")}`;
}
function highlight(text,query){
  const safe=escapeHtml(text);
  if(!query) return safe;
  const escaped=escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  return safe.replace(new RegExp(`(${escaped})`,"gi"),'<span class="highlight">$1</span>');
}
function loadMyMessages(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY_MESSAGES)||"[]");}
  catch{return [];}
}
function saveMyMessages(messages){
  localStorage.setItem(STORAGE_KEY_MESSAGES,JSON.stringify(messages));
}
function allMessages(){
  const artist=MESSAGES.map((m,i)=>({
    ...m,side:"artist",displayText:replaceNicknameToken(m.text||""),
    sortKey:`${m.date}T${m.time||"00:00"}:00`,stable:i
  }));
  const mine=loadMyMessages().map((m,i)=>({
    ...m,side:"mine",displayText:m.text||"",
    sortKey:m.createdAt||`${m.date}T${m.time}:00`,stable:100000+i
  }));
  return [...artist,...mine].sort((a,b)=>{
    const t=a.sortKey.localeCompare(b.sortKey);
    return t||a.stable-b.stable;
  });
}
function render(query="", selectedDate=""){
  chat.innerHTML="";
  const q=query.trim().toLowerCase();
  const dateFilter=selectedDate || "";

  const filtered=allMessages().filter(msg=>{
    const dateMatch=!dateFilter || msg.date===dateFilter;
    if(!dateMatch) return false;

    if(!q) return true;

    return [
      msg.displayText||"",
      msg.date||"",
      msg.time||""
    ].some(v=>v.toLowerCase().includes(q));
  });

  if(!filtered.length){
    const empty=document.createElement("div");
    empty.className="date-divider";
    empty.textContent=dateFilter
      ? "이 날짜에는 저장된 메시지가 없어"
      : "검색 결과가 없어";
    chat.appendChild(empty);
    return;
  }

  let currentDate=null;

  filtered.forEach(msg=>{
    if(msg.date!==currentDate){
      currentDate=msg.date;
      const d=document.createElement("div");
      d.className="date-divider";
      d.textContent=formatDate(msg.date);
      chat.appendChild(d);
    }

    if(msg.side==="mine"){
      const item=document.createElement("article");
      item.className="message mine";
      item.innerHTML=`
        <div class="row">
          <span class="time">${formatTime(msg.time)}</span>
          <div class="bubble">${highlight(msg.displayText||"",query)}</div>
        </div>`;
      chat.appendChild(item);
      return;
    }

    const item=document.createElement("article");
    item.className="message artist";
    item.innerHTML=`
      <img class="avatar" src="${SENDER.profile}" alt="${escapeHtml(SENDER.name)} 프로필">
      <div class="message-content">
        <div class="sender">${escapeHtml(SENDER.name)}</div>
      </div>`;

    const content=item.querySelector(".message-content");
    const row=document.createElement("div");
    row.className="row";

    if(msg.type==="drive-image"){
      const id=encodeURIComponent(msg.driveId||"");
      const preview=`https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
      const original=`https://drive.google.com/file/d/${id}/view`;
      const download=`https://drive.google.com/uc?export=download&id=${id}`;

      row.innerHTML=`
        <div class="media-message">
          <a class="media-open" href="${original}" target="_blank" rel="noopener noreferrer">
            <img
              class="photo drive-photo ${msg.fit==="contain"?"contain":""}"
              src="${preview}"
              alt="${escapeHtml(msg.alt||"사진")}"
              loading="lazy"
            >
          </a>
          <a
            class="media-download"
            href="${download}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="원본 다운로드"
            title="원본 다운로드"
          >↓</a>
        </div>
        <span class="time">${formatTime(msg.time)}</span>`;

      const photo=row.querySelector(".drive-photo");
      if(photo){
        photo.addEventListener("error",()=>{
          const wrap=photo.closest(".media-open");
          if(!wrap) return;
          wrap.classList.add("media-fallback");
          wrap.innerHTML=`<span>사진을 불러오지 못했어<br><b>Google Drive에서 열기</b></span>`;
        },{once:true});
      }

    }else if(msg.type==="drive-video"){
      const id=encodeURIComponent(msg.driveId||"");
      const preview=`https://drive.google.com/file/d/${id}/preview`;
      const original=`https://drive.google.com/file/d/${id}/view`;
      const download=`https://drive.google.com/uc?export=download&id=${id}`;

      row.innerHTML=`
        <div class="media-message video-message">
          <div class="drive-video-frame">
            <iframe
              src="${preview}"
              title="${escapeHtml(msg.alt||"동영상")}"
              allow="autoplay; fullscreen"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div class="media-actions">
            <a href="${original}" target="_blank" rel="noopener noreferrer">Drive에서 열기</a>
            <a
              class="video-download"
              href="${download}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="원본 다운로드"
            >↓</a>
          </div>
        </div>
        <span class="time">${formatTime(msg.time)}</span>`;

    }else if(msg.type==="image"){
      row.innerHTML=`
        <img class="photo ${msg.fit==="contain"?"contain":""}" src="${msg.src}" alt="${escapeHtml(msg.alt||"사진")}">
        <span class="time">${formatTime(msg.time)}</span>`;
    }else{
      row.innerHTML=`
        <div class="bubble">${highlight(msg.displayText||"",query)}</div>
        <span class="time">${formatTime(msg.time)}</span>`;
    }

    content.appendChild(row);
    chat.appendChild(item);
  });
}
function scrollToBottom(smooth=true){
  requestAnimationFrame(()=>{
    phone.scrollTo({top:phone.scrollHeight,behavior:smooth?"smooth":"auto"});
  });
}
function updateComposer(){
  const value=messageInput.value.trim();
  sendBtn.classList.toggle("active",!!value);
  messageInput.style.height="auto";
  const next=Math.min(messageInput.scrollHeight,100);
  messageInput.style.height=Math.max(next,41)+"px";
}
function sendCurrentMessage(){
  const text=messageInput.value.trim();
  if(!text) return;
  const now=new Date();
  const mine=loadMyMessages();
  mine.push({
    id:Date.now(),date:dateKeyFromDate(now),time:timeKeyFromDate(now),
    type:"text",text,createdAt:now.toISOString()
  });
  saveMyMessages(mine);
  messageInput.value="";
  updateComposer();
  render();
  scrollToBottom();
}
composer.addEventListener("submit",e=>{e.preventDefault();sendCurrentMessage();});
messageInput.addEventListener("input",updateComposer);
messageInput.addEventListener("keydown",e=>{
  if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendCurrentMessage();}
});
document.getElementById("searchBtn").addEventListener("click",()=>{
  searchBox.classList.add("show");searchInput.focus();
});
document.getElementById("searchClose").addEventListener("click",()=>{
  searchBox.classList.remove("show");searchInput.value="";dateSearchInput.value="";render();
});
searchInput.addEventListener("input",e=>{
  render(e.target.value,dateSearchInput.value);
});

dateSearchInput.addEventListener("change",()=>{
  render(searchInput.value,dateSearchInput.value);
  if(dateSearchInput.value){
    requestAnimationFrame(()=>phone.scrollTo({top:0,behavior:"smooth"}));
  }
});

clearDateSearch.addEventListener("click",()=>{
  dateSearchInput.value="";
  render(searchInput.value,"");
});

render();
updateComposer();
openNicknameModal();
