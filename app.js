const phone=document.getElementById("phone");
const chat=document.getElementById("chat");

const roomTitle=document.getElementById("roomTitle");
const roomStatus=document.getElementById("roomStatus");

const searchBox=document.getElementById("searchBox");
const searchInput=document.getElementById("searchInput");

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
document.title=`${CHATROOM.title} - Bubble Backup`;

/* =========================
   닉네임 / 받침 처리
   ========================= */

function getNickname(){
  return localStorage.getItem(STORAGE_KEY_NICKNAME) || "";
}

function saveNickname(name){
  localStorage.setItem(STORAGE_KEY_NICKNAME,name);
}

/*
  한글 음절의 마지막 글자 받침 판별:
  가(AC00)부터 힣(D7A3)까지,
  (코드 - AC00) % 28 === 0 이면 받침 없음.
*/
function hasFinalConsonant(name){
  const trimmed=String(name||"").trim();
  if(!trimmed) return false;

  const last=trimmed.charAt(trimmed.length-1);
  const code=last.charCodeAt(0);

  if(code < 0xAC00 || code > 0xD7A3){
    return false;
  }

  return (code - 0xAC00) % 28 !== 0;
}

function naturalNickname(name){
  const trimmed=String(name||"").trim();

  if(!trimmed){
    return "";
  }

  return hasFinalConsonant(trimmed)
    ? `${trimmed}이`
    : trimmed;
}

function replaceNicknameToken(text){
  const nickname=getNickname();
  const replacement=naturalNickname(nickname);

  return String(text||"").replaceAll("@@@",replacement);
}

function updateNicknamePreview(){
  const raw=nicknameInput.value.trim();

  nicknamePreview.textContent=raw
    ? `${naturalNickname(raw)} 오늘 뭐해?`
    : "닉네임";
}

function openNicknameModal(force=false){
  const saved=getNickname();

  if(saved && !force){
    return;
  }

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
  if(e.key==="Enter"){
    e.preventDefault();
    nicknameSave.click();
  }
});

nicknameSave.addEventListener("click",()=>{
  const name=nicknameInput.value.trim();

  if(!name){
    nicknameInput.focus();
    return;
  }

  saveNickname(name);
  closeNicknameModal();
  render();
});

moreBtn.addEventListener("click",()=>{
  openNicknameModal(true);
});

/* =========================
   공통
   ========================= */

function escapeHtml(text=""){
  return String(text).replace(/[&<>"']/g,ch=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
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

  const day=[
    "일","월","화","수","목","금","토"
  ][new Date(y,m-1,d).getDay()];

  return `${y}년 ${m}월 ${d}일 ${day}요일`;
}

function formatTime(timeStr){
  if(!timeStr){
    return "";
  }

  const [h,m]=timeStr.split(":").map(Number);

  const ampm=h<12
    ? "오전"
    : "오후";

  const hh=h%12||12;

  return `${ampm} ${hh}:${String(m).padStart(2,"0")}`;
}

function highlight(text,query){
  const safe=escapeHtml(text);

  if(!query){
    return safe;
  }

  const escaped=escapeHtml(query)
    .replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

  return safe.replace(
    new RegExp(`(${escaped})`,"gi"),
    '<span class="highlight">$1</span>'
  );
}

/* =========================
   내가 보낸 메시지 저장
   ========================= */

function loadMyMessages(){
  try{
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY_MESSAGES) || "[]"
    );
  }catch{
    return [];
  }
}

function saveMyMessages(messages){
  localStorage.setItem(
    STORAGE_KEY_MESSAGES,
    JSON.stringify(messages)
  );
}

/* =========================
   메시지 합치기
   ========================= */

function allMessages(){
  const artist=MESSAGES.map((m,i)=>({
    ...m,
    side:"artist",
    displayText:replaceNicknameToken(m.text||""),
    sortKey:m.time
      ? `${m.date}T${m.time}:00`
      : `${m.date}T00:00:00`,
    stable:i
  }));

  const mine=loadMyMessages().map((m,i)=>({
    ...m,
    side:"mine",
    displayText:m.text||"",
    sortKey:m.createdAt || `${m.date}T${m.time}:00`,
    stable:100000+i
  }));

  return [...artist,...mine].sort((a,b)=>{
    const byTime=a.sortKey.localeCompare(b.sortKey);
    return byTime || a.stable-b.stable;
  });
}

/* =========================
   렌더링
   ========================= */

function render(query=""){
  chat.innerHTML="";

  const q=query.trim().toLowerCase();

  const filtered=allMessages().filter(msg=>{
    if(!q){
      return true;
    }

    return [
      msg.displayText||"",
      msg.date||"",
      msg.time||""
    ].some(v=>v.toLowerCase().includes(q));
  });

  if(!filtered.length){
    return;
  }

  let currentDate=null;

  filtered.forEach(msg=>{

    if(msg.date!==currentDate){
      currentDate=msg.date;

      const date=document.createElement("div");
      date.className="date-divider";
      date.textContent=formatDate(msg.date);

      chat.appendChild(date);
    }

    if(msg.side==="mine"){
      const item=document.createElement("article");
      item.className="message mine";

      const formattedTime=formatTime(msg.time);

      item.innerHTML=`
        <div class="row">
          <span class="time ${formattedTime ? "" : "hidden"}">
            ${formattedTime}
          </span>

          <div class="bubble">
            ${highlight(msg.displayText||"",query)}
          </div>
        </div>
      `;

      chat.appendChild(item);
      return;
    }

    const item=document.createElement("article");
    item.className="message artist";

    item.innerHTML=`
      <img
        class="avatar"
        src="${SENDER.profile}"
        alt="${escapeHtml(SENDER.name)} 프로필"
      >

      <div class="message-content">
        <div class="sender">
          ${escapeHtml(SENDER.name)}
        </div>
      </div>
    `;

    const content=item.querySelector(".message-content");
    const row=document.createElement("div");
    row.className="row";

    const formattedTime=formatTime(msg.time);

    if(msg.type==="image"){
      row.innerHTML=`
        <img
          class="photo ${msg.fit==="contain"?"contain":""}"
          src="${msg.src}"
          alt="${escapeHtml(msg.alt||"사진")}"
        >

        <span class="time ${formattedTime ? "" : "hidden"}">
          ${formattedTime}
        </span>
      `;
    }else{
      row.innerHTML=`
        <div class="bubble">
          ${highlight(msg.displayText||"",query)}
        </div>

        <span class="time ${formattedTime ? "" : "hidden"}">
          ${formattedTime}
        </span>
      `;
    }

    content.appendChild(row);
    chat.appendChild(item);
  });
}

/* =========================
   내가 채팅 보내기
   ========================= */

function scrollToBottom(smooth=true){
  requestAnimationFrame(()=>{
    phone.scrollTo({
      top:phone.scrollHeight,
      behavior:smooth ? "smooth" : "auto"
    });
  });
}

function updateComposer(){
  const value=messageInput.value.trim();

  sendBtn.classList.toggle(
    "active",
    !!value
  );

  messageInput.style.height="auto";

  const next=Math.min(
    messageInput.scrollHeight,
    100
  );

  messageInput.style.height=
    Math.max(next,41)+"px";
}

function sendCurrentMessage(){
  const text=messageInput.value.trim();

  if(!text){
    return;
  }

  const now=new Date();
  const mine=loadMyMessages();

  mine.push({
    id:Date.now(),
    date:dateKeyFromDate(now),
    time:timeKeyFromDate(now),
    type:"text",
    text,
    createdAt:now.toISOString()
  });

  saveMyMessages(mine);

  messageInput.value="";
  updateComposer();
  render();
  scrollToBottom();
}

composer.addEventListener("submit",e=>{
  e.preventDefault();
  sendCurrentMessage();
});

messageInput.addEventListener(
  "input",
  updateComposer
);

messageInput.addEventListener("keydown",e=>{
  if(e.key==="Enter" && !e.shiftKey){
    e.preventDefault();
    sendCurrentMessage();
  }
});

/* =========================
   검색
   ========================= */

document.getElementById("searchBtn")
  .addEventListener("click",()=>{
    searchBox.classList.add("show");
    searchInput.focus();
  });

document.getElementById("searchClose")
  .addEventListener("click",()=>{
    searchBox.classList.remove("show");
    searchInput.value="";
    render();
  });

searchInput.addEventListener(
  "input",
  e=>render(e.target.value)
);

/* =========================
   시작
   ========================= */

render();
updateComposer();
openNicknameModal();
