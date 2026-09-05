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
const moreMenu=document.getElementById("moreMenu");
const editNicknameBtn=document.getElementById("editNicknameBtn");
const openMediaBtn=document.getElementById("openMediaBtn");
const mediaGalleryModal=document.getElementById("mediaGalleryModal");
const mediaGalleryClose=document.getElementById("mediaGalleryClose");
const mediaGalleryGrid=document.getElementById("mediaGalleryGrid");
const mediaGalleryCount=document.getElementById("mediaGalleryCount");
const mediaGalleryEmpty=document.getElementById("mediaGalleryEmpty");
const mediaTabs=[...document.querySelectorAll(".media-tab")];
const pollDetailModal=document.getElementById("pollDetailModal");
const pollDetailClose=document.getElementById("pollDetailClose");
const pollDetailContent=document.getElementById("pollDetailContent");
const pollDetailAction=document.getElementById("pollDetailAction");

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

function positionMoreMenu(){
  const rect=moreBtn.getBoundingClientRect();
  const menuWidth=188;
  const viewportPad=10;
  let left=rect.right-menuWidth;
  left=Math.max(viewportPad,Math.min(left,window.innerWidth-menuWidth-viewportPad));
  const top=Math.min(rect.bottom+7,window.innerHeight-120);

  moreMenu.style.left=`${left}px`;
  moreMenu.style.top=`${top}px`;
}
function openMoreMenu(){
  positionMoreMenu();
  moreMenu.classList.add("show");
  moreMenu.setAttribute("aria-hidden","false");
}
function closeMoreMenu(){
  moreMenu.classList.remove("show");
  moreMenu.setAttribute("aria-hidden","true");
}
moreBtn.addEventListener("click",e=>{
  e.stopPropagation();
  if(moreMenu.classList.contains("show")) closeMoreMenu();
  else openMoreMenu();
});
moreMenu.addEventListener("click",e=>e.stopPropagation());
document.addEventListener("click",closeMoreMenu);
window.addEventListener("resize",()=>{
  if(moreMenu.classList.contains("show")) positionMoreMenu();
});
window.addEventListener("scroll",closeMoreMenu,true);

editNicknameBtn.addEventListener("click",()=>{
  closeMoreMenu();
  openNicknameModal(true);
});

function mediaItems(){
  return MESSAGES
    .map((msg,index)=>({...msg,_mediaIndex:index}))
    .filter(msg=>["drive-image","drive-video","image"].includes(msg.type))
    .sort((a,b)=>{
      const ak=`${a.date||""}T${a.time||"00:00"}:00`;
      const bk=`${b.date||""}T${b.time||"00:00"}:00`;
      return bk.localeCompare(ak) || b._mediaIndex-a._mediaIndex;
    });
}

function renderMediaGallery(filter="all"){
  const all=mediaItems();
  const filtered=all.filter(msg=>{
    if(filter==="all") return true;
    if(filter==="image") return msg.type==="drive-image" || msg.type==="image";
    if(filter==="video") return msg.type==="drive-video";
    return true;
  });

  mediaGalleryGrid.innerHTML="";
  mediaGalleryCount.textContent=`${filtered.length}개`;
  mediaGalleryEmpty.classList.toggle("show",filtered.length===0);

  filtered.forEach(msg=>{
    const item=document.createElement("article");
    item.className="media-gallery-item";

    const isVideo=msg.type==="drive-video";
    const isDriveImage=msg.type==="drive-image";
    let thumb="";
    let openUrl="";

    if(isVideo){
      const id=encodeURIComponent(msg.driveId||"");
      thumb=`https://drive.google.com/thumbnail?id=${id}&sz=w700`;
    }else if(isDriveImage){
      const id=encodeURIComponent(msg.driveId||"");
      thumb=`https://drive.google.com/thumbnail?id=${id}&sz=w700`;
      openUrl=`https://drive.google.com/file/d/${id}/view`;
    }else{
      thumb=msg.src||"";
      openUrl=msg.src||"";
    }

    item.innerHTML=`
      <button class="media-gallery-thumb" type="button" aria-label="${isVideo?"동영상 재생":"사진 열기"}">
        <img src="${thumb}" alt="${escapeHtml(msg.alt||(isVideo?"동영상":"사진"))}" loading="lazy">
        ${isVideo?'<span class="gallery-play" aria-hidden="true">▶</span>':""}
      </button>
      <div class="media-gallery-meta">
        <span>${escapeHtml(msg.date||"")}</span>
        <span>${formatTime(msg.time||"")}</span>
      </div>
    `;

    const button=item.querySelector(".media-gallery-thumb");
    const img=item.querySelector("img");

    button.addEventListener("click",()=>{
      if(isVideo){
        openDriveVideo(encodeURIComponent(msg.driveId||""),msg.alt||"동영상");
      }else if(openUrl){
        window.open(openUrl,"_blank","noopener,noreferrer");
      }
    });

    img.addEventListener("error",()=>{
      img.style.display="none";
      button.classList.add("gallery-no-thumb");
    },{once:true});

    mediaGalleryGrid.appendChild(item);
  });
}

function openMediaGallery(){
  closeMoreMenu();
  mediaTabs.forEach(tab=>tab.classList.toggle("active",tab.dataset.mediaFilter==="all"));
  renderMediaGallery("all");
  mediaGalleryModal.classList.add("show");
  mediaGalleryModal.setAttribute("aria-hidden","false");
  document.body.classList.add("media-gallery-open");
}
function closeMediaGallery(){
  mediaGalleryModal.classList.remove("show");
  mediaGalleryModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("media-gallery-open");
}

openMediaBtn.addEventListener("click",openMediaGallery);
mediaGalleryClose.addEventListener("click",closeMediaGallery);
mediaTabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    mediaTabs.forEach(t=>t.classList.toggle("active",t===tab));
    renderMediaGallery(tab.dataset.mediaFilter||"all");
  });
});


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
function formatPollCreated(msg){
  if(msg.createdText) return msg.createdText;
  if(!msg.date) return "";
  const [y,m,d]=msg.date.split("-").map(Number);
  const time=formatTime(msg.time||"");
  return `${String(y).slice(2)}/${m}/${d}${time?` ${time}`:""}`;
}
function clampPercent(value){
  const n=Number(value);
  if(!Number.isFinite(n)) return 0;
  return Math.max(0,Math.min(100,n));
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
    ...m,
    side:"artist",
    displayText:replaceNicknameToken(m.text||""),
    displayQuestion:replaceNicknameToken(m.question||""),
    displayOptions:Array.isArray(m.options)
      ?m.options.map(option=>({
        ...option,
        displayText:replaceNicknameToken(option.text||"")
      }))
      :[],
    sortKey:`${m.date}T${m.time||"00:00"}:00`,
    stable:i
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

function ensureVideoModal(){
  let modal=document.getElementById("driveVideoModal");
  if(modal) return modal;

  modal=document.createElement("div");
  modal.id="driveVideoModal";
  modal.className="video-modal";
  modal.setAttribute("aria-hidden","true");
  modal.innerHTML=`
    <div class="video-modal-backdrop" data-close-video></div>
    <div class="video-modal-card" role="dialog" aria-modal="true" aria-label="동영상 재생">
      <button class="video-modal-close" type="button" data-close-video aria-label="닫기">×</button>
      <div class="video-modal-frame">
        <iframe
          title="동영상"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>`;

  document.body.appendChild(modal);

  modal.querySelectorAll("[data-close-video]").forEach(el=>{
    el.addEventListener("click",closeDriveVideo);
  });

  document.addEventListener("keydown",e=>{
    if(e.key==="Escape" && modal.classList.contains("show")){
      closeDriveVideo();
    }
  });

  return modal;
}

function openDriveVideo(id,title="동영상"){
  const modal=ensureVideoModal();
  const frame=modal.querySelector("iframe");
  frame.title=title;
  frame.src=`https://drive.google.com/file/d/${id}/preview`;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("video-modal-open");
}

function closeDriveVideo(){
  const modal=document.getElementById("driveVideoModal");
  if(!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  const frame=modal.querySelector("iframe");
  if(frame) frame.src="";
  document.body.classList.remove("video-modal-open");
}

function openPollDetail(msg){
  if(!pollDetailModal||!pollDetailContent) return;

  const options=Array.isArray(msg.displayOptions)?msg.displayOptions:[];
  const optionsHtml=options.length
    ?options.map(option=>{
      const rawPercent=option.percent??"";
      const hasPercent=rawPercent!=="" && rawPercent!==null && rawPercent!==undefined;
      const percentLabel=hasPercent?`${escapeHtml(rawPercent)}%`:"";
      const width=hasPercent?clampPercent(rawPercent):0;

      return `
        <div class="poll-result-item">
          <span class="poll-result-radio" aria-hidden="true"></span>
          <div class="poll-result-card">
            <div class="poll-result-option">${escapeHtml(option.displayText||"")}</div>
            <div class="poll-result-meter-row">
              <div class="poll-result-meter" aria-hidden="true">
                <span style="width:${width}%"></span>
              </div>
              <span class="poll-result-percent">${percentLabel}</span>
            </div>
          </div>
        </div>`;
    }).join("")
    :'<div class="poll-result-empty">저장된 투표 결과가 없어</div>';

  pollDetailContent.innerHTML=`
    <div class="poll-detail-artist">
      <img class="poll-detail-avatar" src="${SENDER.profile}" alt="${escapeHtml(SENDER.name)} 프로필">
      <div class="poll-detail-artist-copy">
        <div class="poll-detail-name-row">
          <span class="poll-detail-badge">ARTIST</span>
          <strong>${escapeHtml(SENDER.name)}</strong>
        </div>
        <div class="poll-detail-created">${escapeHtml(formatPollCreated(msg))}</div>
      </div>
    </div>

    <section class="poll-detail-copy">
      <div class="poll-detail-question">${escapeHtml(msg.displayQuestion||"")}</div>
      ${msg.endedText?`<div class="poll-detail-ended">${escapeHtml(msg.endedText)}</div>`:""}
    </section>

    <div class="poll-results">
      ${optionsHtml}
    </div>`;

  if(pollDetailAction){
    pollDetailAction.textContent=msg.actionText||"투표하기";
  }

  pollDetailModal.classList.add("show");
  pollDetailModal.setAttribute("aria-hidden","false");
  document.body.classList.add("poll-detail-open");
  if(typeof pollDetailContent.scrollTo==="function"){
    pollDetailContent.scrollTo({top:0,behavior:"auto"});
  }else{
    pollDetailContent.scrollTop=0;
  }
}

function closePollDetail(){
  if(!pollDetailModal) return;
  pollDetailModal.classList.remove("show");
  pollDetailModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("poll-detail-open");
}

if(pollDetailClose){
  pollDetailClose.addEventListener("click",closePollDetail);
}
if(pollDetailAction){
  pollDetailAction.addEventListener("click",e=>e.preventDefault());
}

function render(query="", selectedDate=""){
  chat.innerHTML="";
  const q=query.trim().toLowerCase();
  const dateFilter=selectedDate || "";

  const filtered=allMessages().filter(msg=>{
    const dateMatch=!dateFilter || msg.date===dateFilter;
    if(!dateMatch) return false;

    if(!q) return true;

    const pollOptionText=Array.isArray(msg.displayOptions)
      ?msg.displayOptions.map(option=>option.displayText||"").join(" ")
      :"";

    return [
      msg.displayText||"",
      msg.displayQuestion||"",
      pollOptionText,
      msg.untilText||"",
      msg.endedText||"",
      msg.date||"",
      msg.time||""
    ].some(v=>String(v).toLowerCase().includes(q));
  });

  if(!filtered.length){
    const empty=document.createElement("div");
    empty.className="date-divider";
    empty.textContent=dateFilter
      ? "NO RESULT"
      : "NO RESULT";
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

    if(msg.type==="emote" || msg.type==="drive-emote"){
      let src="";
      if(msg.type==="drive-emote"){
        const id=encodeURIComponent(msg.driveId||"");
        src=`https://drive.google.com/thumbnail?id=${id}&sz=w800`;
      }else{
        src=msg.src||"";
      }

      row.classList.add("emote-row");
      row.innerHTML=`
        <div class="emote-message">
          <img
            class="emote-image"
            src="${src}"
            alt="${escapeHtml(msg.alt||"이모티콘")}"
            loading="lazy"
          >
        </div>
        <span class="time">${formatTime(msg.time)}</span>`;

      const emote=row.querySelector(".emote-image");
      if(emote){
        emote.addEventListener("error",()=>{
          const wrap=emote.closest(".emote-message");
          if(!wrap) return;
          wrap.classList.add("emote-fallback");
          wrap.textContent="이모티콘";
        },{once:true});
      }

    }else if(msg.type==="drive-image"){
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
      const thumbnail=`https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
      const download=`https://drive.google.com/uc?export=download&id=${id}`;

      row.innerHTML=`
        <div class="media-message video-message">
          <button
            class="video-thumb-button"
            type="button"
            data-drive-id="${id}"
            aria-label="동영상 재생"
          >
            <img
              class="video-thumb"
              src="${thumbnail}"
              alt="${escapeHtml(msg.alt||"동영상 썸네일")}"
              loading="lazy"
            >
            <span class="video-play-icon" aria-hidden="true">▶</span>
          </button>

          <a
            class="media-download video-card-download"
            href="${download}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="원본 다운로드"
            title="원본 다운로드"
          >↓</a>
        </div>
        <span class="time">${formatTime(msg.time)}</span>`;

      const playButton=row.querySelector(".video-thumb-button");
      if(playButton){
        playButton.addEventListener("click",()=>{
          openDriveVideo(id,msg.alt||"동영상");
        });
      }

      const thumb=row.querySelector(".video-thumb");
      if(thumb){
        thumb.addEventListener("error",()=>{
          thumb.style.display="none";
          playButton.classList.add("no-thumb");
        },{once:true});
      }

    }else if(msg.type==="poll"){
      row.classList.add("poll-row");
      row.innerHTML=`
        <button class="poll-card" type="button" aria-label="투표 상세보기">
          <div class="poll-card-label">
            <span class="poll-card-bubble-word">bubble</span>
            <span>투표 시작</span>
          </div>

          <div class="poll-card-hero" aria-hidden="true">
            <div class="poll-card-hero-copy">
              <strong>투표 시작</strong>
              <span>bubble poll</span>
            </div>

            <svg class="poll-card-icon" viewBox="0 0 96 96">
              <circle cx="69" cy="27" r="20" fill="#fff2a8"></circle>
              <path d="M25 68V43c0-5 4-9 9-9h29c5 0 9 4 9 9v25" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M18 69h62" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"></path>
              <path d="M44 50l7 7 14-16" fill="none" stroke="#ffd729" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>

          <div class="poll-card-question">Q. ${highlight(msg.displayQuestion||"",query)}</div>
          ${msg.untilText?`<div class="poll-card-until">${escapeHtml(msg.untilText)}</div>`:""}

          <div class="poll-card-action">
            <span>${escapeHtml(msg.cardActionText||"투표하기")}</span>
            <span class="poll-card-chevron" aria-hidden="true">›</span>
          </div>
        </button>
        <span class="time">${formatTime(msg.time)}</span>`;

      const pollButton=row.querySelector(".poll-card");
      if(pollButton){
        pollButton.addEventListener("click",()=>openPollDetail(msg));
      }

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

document.addEventListener("keydown",e=>{
  if(e.key!=="Escape") return;

  if(pollDetailModal && pollDetailModal.classList.contains("show")){
    closePollDetail();
    return;
  }

  if(mediaGalleryModal.classList.contains("show")){
    closeMediaGallery();
  }
});

render();
updateComposer();
openNicknameModal();