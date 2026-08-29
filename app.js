const chat=document.getElementById("chat");
const roomTitle=document.getElementById("roomTitle");
const roomStatus=document.getElementById("roomStatus");
const searchBox=document.getElementById("searchBox");
const searchInput=document.getElementById("searchInput");

roomTitle.textContent=CHATROOM.title;
roomStatus.textContent=CHATROOM.status;
document.title=`${CHATROOM.title} - Bubble Backup`;

if(BACKGROUND){
  document.documentElement.style.setProperty("--chat-bg",`url("${BACKGROUND}")`);
}

function escapeHtml(text=""){
  return String(text).replace(/[&<>"']/g,ch=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[ch]));
}

function formatDate(dateStr){
  const [y,m,d]=dateStr.split("-").map(Number);
  const day=["일","월","화","수","목","금","토"][new Date(y,m-1,d).getDay()];
  return `${y}년 ${m}월 ${d}일 ${day}요일`;
}

function formatTime(timeStr){
  const [h,m]=timeStr.split(":").map(Number);
  const ampm=h<12?"오전":"오후";
  const hh=h%12||12;
  return `${ampm} ${hh}:${String(m).padStart(2,"0")}`;
}

function highlight(text,query){
  const safe=escapeHtml(text);
  if(!query) return safe;
  const escaped=escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  return safe.replace(
    new RegExp(`(${escaped})`,"gi"),
    '<span class="highlight">$1</span>'
  );
}

function render(query=""){
  chat.innerHTML="";

  // 아직 메시지가 없으면 빈 채팅방 배경만 표시
  if(!MESSAGES.length) return;

  const q=query.trim().toLowerCase();
  const filtered=MESSAGES.filter(msg=>{
    if(!q) return true;
    return [msg.text||"",msg.date||"",msg.time||""]
      .some(v=>v.toLowerCase().includes(q));
  });

  if(!filtered.length){
    const d=document.createElement("div");
    d.className="date-divider";
    d.textContent="검색 결과가 없어";
    chat.appendChild(d);
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

    const item=document.createElement("article");
    item.className="message";

    item.innerHTML=`
      <img class="avatar"
           src="${SENDER.profile}"
           alt="${escapeHtml(SENDER.name)} 프로필">
      <div class="message-content">
        <div class="sender">${escapeHtml(SENDER.name)}</div>
      </div>
    `;

    const content=item.querySelector(".message-content");
    const row=document.createElement("div");
    row.className="row";

    if(msg.type==="image"){
      row.innerHTML=`
        <img class="photo ${msg.fit==="contain"?"contain":""}"
             src="${msg.src}"
             alt="${escapeHtml(msg.alt||"사진")}">
        <span class="time">${formatTime(msg.time)}</span>
      `;
    }else{
      row.innerHTML=`
        <div class="bubble">${highlight(msg.text||"",query)}</div>
        <span class="time">${formatTime(msg.time)}</span>
      `;
    }

    content.appendChild(row);
    chat.appendChild(item);
  });
}

document.getElementById("searchBtn").addEventListener("click",()=>{
  searchBox.classList.add("show");
  searchInput.focus();
});

document.getElementById("searchClose").addEventListener("click",()=>{
  searchBox.classList.remove("show");
  searchInput.value="";
  render();
});

searchInput.addEventListener("input",e=>render(e.target.value));

render();
