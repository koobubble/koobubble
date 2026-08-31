const CHATROOM = {
  title: "건일 선배",
  status: "980724"
};

const SENDER = {
  name: "건일 선배",
  profile: "profile.jpg"
};

const MESSAGES = [
	{ date: "2022-11-25", time: "08:49", type: "text", text: "굿모닝!!" },
{ date: "2022-11-25", time: "08:52", type: "text", text: "잘 잤지!!" },
{ date: "2022-11-25", time: "08:52", type: "text", text: "@@@ 너는?" },
{ date: "2022-11-25", time: "09:04", type: "text", text: "꿈에서 나 나왔다고?!" },
{ date: "2022-11-25", time: "09:04", type: "text", text: "어떤 꿈이었어? 궁금해 ㅎㅎ" },
{ date: "2022-11-25", time: "09:46", type: "text", text: "나 오늘 오랜만에 아침에 유자차 마셨는데" },
{ date: "2022-11-25", time: "09:46", type: "text", text: "너무 좋더라" },
{ date: "2022-11-25", time: "09:46", type: "emote", src: "emotes/dance.png", alt: "신나게 춤추는 햄스터 이모티콘" },
{ date: "2022-11-25", time: "10:48", type: "text", text: "ㅋㅋㅋㅋ 원래 보통 아아 마시는데" },
{ date: "2022-11-25", time: "10:48", type: "text", text: "요즘 따뜻하구 달달한 차가 좋더라구" },
{ date: "2022-11-25", time: "23:41", type: "text", text: "ㅎㅎ 금요일 잘 보냈어?!" },
{ date: "2022-11-25", time: "23:43", type: "text", text: "응응 ㅎㅎ 알찬 하루였어!" },
	{ date: "2022-11-24", time: "14:12", type: "text", text: "안뇽" },
{ date: "2022-11-24", time: "14:13", type: "text", text: "머해 ㅎㅎ" },
{ date: "2022-11-24", time: "14:22", type: "text", text: "밥 뭐먹었엉!" },
{ date: "2022-11-24", time: "16:17", type: "text", text: "난 점심은 별로 배가 안고파서 그냥 오랜만에 달달한 커피 마셨어!" },
{ date: "2022-11-24", time: "16:17", type: "text", text: "맨날 아아만 먹다가 오랜만에 달달하게 땡기더라구" },
{ date: "2022-11-24", time: "16:20", type: "text", text: "연유라떼 마셨어!" },
{ date: "2022-11-24", time: "16:27", type: "text", text: "ㅎㅎ 이제 곧 저녁 먹으려구" },
{ date: "2022-11-24", time: "16:33", type: "text", text: "떡볶이!!!" },
	{ date: "2022-11-22", time: "13:57", type: "text", text: "@@@" },
{ date: "2022-11-22", time: "15:09", type: "text", text: "뭐하구있어! 점심은 잘 챙겨먹었어?" },
{ date: "2022-11-22", time: "20:15", type: "text", text: "@@@" },
{ date: "2022-11-22", time: "20:15", type: "text", text: "보구싶다.." },
{ date: "2022-11-22", time: "21:56", type: "text", text: "ㅎㅎ 브이라이브 본 사람!!" },
{ date: "2022-11-22", time: "22:15", type: "text", text: "재밌었어?!" },
{ date: "2022-11-22", time: "22:21", type: "text", text: "ㅎㅎ 나도 @@@ 보고싶었는데" },
{ date: "2022-11-22", time: "22:21", type: "text", text: "같이 웃으면서 하루 마무리 할 수 있어서 넘 좋았당" },
	{ date: "2022-11-21", time: "16:29", type: "text", text: "건일등장" },
{ date: "2022-11-21", time: "16:35", type: "text", text: "오늘 날씨가 흐리네.." },
{ date: "2022-11-21", time: "16:35", type: "text", text: "🌤️" },
{ date: "2022-11-21", time: "22:41", type: "text", text: "방금 꿈이야 나온거 봤어?!" },
{ date: "2022-11-21", time: "22:43", type: "text", text: "ㅋㅋㅋㅋ 재밌었다니 뿌듯하다" },
{ date: "2022-11-21", time: "22:44", type: "text", text: "티켓팅은... 잘 성공했어?!" },
{ date: "2022-11-21", time: "22:45", type: "text", text: "ㅎㅎ" },
{ date: "2022-11-21", time: "22:47", type: "text", text: "기대해줘서 고마워 🥹" },
{ date: "2022-11-21", time: "23:05", type: "text", text: "나두 넘 기대된다 ㅎㅎ" },
{ date: "2022-11-21", time: "23:05", type: "text", text: "연말을 울 @@@하고 마무리할 수 있다니!" },
	{ date: "2022-11-20", time: "09:49", type: "text", text: "상쾌한 일요일 아침~~" },
{ date: "2022-11-20", time: "21:56", type: "text", text: "@@@" },
{ date: "2022-11-20", time: "21:56", type: "text", text: "일요일 잘 보냈어?!" },
{ date: "2022-11-20", time: "22:01", type: "text", text: "ㅎㅎ 오늘 우리 무대 어땠어?!" },
{ date: "2022-11-20", time: "22:04", type: "text", text: "ㅋㅋㅋㅋ 자켓에 입었던 미용사 착장!!" },
{ date: "2022-11-20", time: "22:04", type: "text", text: "넘 멋있지 ㅠㅠ" },
{ date: "2022-11-20", time: "23:31", type: "text", text: "내일... 월요일이네..." },
{ date: "2022-11-20", time: "23:55", type: "text", text: "근데 낼 아주 중요한날이지!" },
{ date: "2022-11-20", time: "23:55", type: "text", text: "콘서트 티켓팅!!!" },
{ date: "2022-11-20", time: "23:58", type: "text", text: "엑디즈 보러 올거지? 🥺" },
	{ date: "2022-11-19", time: "10:04", type: "text", text: "좋은 아침!! 🍳" },
{ date: "2022-11-19", time: "10:27", type: "text", text: "오늘 사녹 진짜 많이 왔더라 ㅠㅠㅠ" },
{ date: "2022-11-19", time: "10:27", type: "text", text: "아침부터 보러 와줘서 고마워 🙏" },
{ date: "2022-11-19", time: "10:30", type: "text", text: "ㅋㅋㅋ 응원소리 진짜 크더라!!" },
{ date: "2022-11-19", time: "13:46", type: "text", text: "ㅎㅎ 점심 먹었어?" },
{ date: "2022-11-19", time: "13:46", type: "text", text: "난 라멘 먹었다!" },
	{ date: "2022-11-18", time: "10:31", type: "text", text: "굿모닝~" },
{ date: "2022-11-18", time: "11:18", type: "text", text: "아침 먹었어?" },
{ date: "2022-11-18", time: "19:55", type: "text", text: "@@@" },
{ date: "2022-11-18", time: "19:56", type: "text", text: "뭐해" },
{ date: "2022-11-18", time: "19:57", type: "text", text: "ㅎㅎ 오늘은 재밌는 일 없었어?" },
{ date: "2022-11-18", time: "20:00", type: "text", text: "난 @@@ 생각하면서 오늘 하루 열심히 살았지!" },
{ date: "2022-11-18", time: "20:02", type: "emote", src: "emotes/cloud.png" },
	{ date: "2022-11-17", time: "00:05", type: "text", text: "ㅋㅋㅋ 함께해줘서 고마워!!!!" },
{ date: "2022-11-17", time: "00:06", type: "text", text: "오늘 이제 수능날이구나" },
{ date: "2022-11-17", time: "00:06", type: "text", text: "고3친구들.. 떨지말구 잘 하구와!!!" },
{ date: "2022-11-17", time: "00:18", type: "text", text: "그러게... 이미 자고있겠구나" },
{ date: "2022-11-17", time: "00:26", type: "text", text: "ㅎㅎ 오늘 하루도 고생 많았어 @@@" },
{ date: "2022-11-17", time: "00:29", type: "emote", src: "emotes/sleep.png" },
{ date: "2022-11-17", time: "00:29", type: "text", text: "잘자! 휘용휘용휘용.." },
{ date: "2022-11-17", time: "22:38", type: "text", text: "안뇽!" },
{ date: "2022-11-17", time: "22:38", type: "text", text: "오늘 하루 어떻게 보냈어?" },
{ date: "2022-11-17", time: "22:39", type: "text", text: "ㅎㅎ 오늘 락더월드 올라온거 봤어?!" },
{ date: "2022-11-17", time: "22:43", type: "text", text: "ㅋㅋㅋㅋ 재밌었다니 뿌듯하다" },
{ date: "2022-11-17", time: "22:43", type: "text", text: "아직 못봤으면 꼭 챙겨봐!!!" },
{ date: "2022-11-17", time: "22:46", type: "text", text: "나 오늘 하루 마무리하면서 들을 노래 추천해주라!!" },
{ date: "2022-11-17", time: "22:53", type: "text", text: "오호 고마워 ㅎㅎ" },
{ date: "2022-11-17", time: "22:53", type: "text", text: "꼭 들어볼게!!" },
{ date: "2022-11-17", time: "22:53", type: "text", text: "나 좋아하는 장르는... 정말 많지만! 오늘은 혼네같이 분위기있는 장르..? ㅋㅋㅋㅋ" },
	{ date: "2022-11-16", time: "12:45", type: "text", text: "안뇽" },
{ date: "2022-11-16", time: "12:48", type: "text", text: "오늘 추워.. ㅠㅠㅠ" },
{ date: "2022-11-16", time: "12:48", type: "text", text: "패딩 입어야해 이제" },
{ date: "2022-11-16", time: "16:53", type: "text", text: "뭐하구이써" },
{ date: "2022-11-16", time: "19:35", type: "text", text: "저녁 먹었어?" },
{ date: "2022-11-16", time: "19:38", type: "text", text: "난 아직 ㅎㅎ" },
{ date: "2022-11-16", time: "19:38", type: "text", text: "흠 저메추... 피자?" },
{ date: "2022-11-16", time: "19:41", type: "text", text: "국밥도 좋구 ㅋㅋㅋ!" },
{ date: "2022-11-16", time: "19:48", type: "text", text: "오늘 어떤 하루 보냈어" },
{ date: "2022-11-16", time: "19:49", type: "text", text: "힘든일은 없었어?" },
{ date: "2022-11-16", time: "19:52", type: "emote", src: "emotes/love.png" },
{ date: "2022-11-16", time: "19:52", type: "text", text: "ㅎㅎ 고생 많았어!" },
{ date: "2022-11-16", time: "20:54", type: "text", text: "오늘 밤에 라디오도 있으니까" },
{ date: "2022-11-16", time: "20:54", type: "text", text: "같이 오늘 하루 마무리하자 🌙" },
{ date: "2022-11-16", time: "23:53", type: "text", text: "ㅎㅎ 라디오 어땠어?" },
	{ date: "2022-11-14", time: "15:01", type: "drive-image", driveId: "1Dv39Y6dYFWRmf_QPW4OHmqbWp3uihU-l" },
{ date: "2022-11-14", time: "15:01", type: "drive-image", driveId: "1gzMTj0h8M8icGnKScN-FVQU6ePUp5jne" },
{ date: "2022-11-15", time: "22:06", type: "text", text: "안뇽" },
{ date: "2022-11-15", time: "22:08", type: "text", text: "멤버들이 나 춤이 늘은거 같다넹.. ㅋㅋㅋ" },
{ date: "2022-11-15", time: "22:10", type: "text", text: "이제 내가 춤을 춰도 재밌지가 않데 ㅋㅋㅋㅋㅋ" },
	{ date: "2022-11-13", time: "01:02", type: "text", text: "안뇽" },
{ date: "2022-11-13", time: "01:07", type: "text", text: "응 ㅎㅎㅎ 인기가요 가야지!" },
{ date: "2022-11-13", time: "01:07", type: "text", text: "잘 잤어!" },
{ date: "2022-11-13", time: "01:11", type: "text", text: "컨디션 굿!!!" },
{ date: "2022-11-13", time: "11:17", type: "text", text: "ㅎㅎ 뭐해" },
{ date: "2022-11-13", time: "12:51", type: "text", text: "오늘 날씨가 흐리네 ㅠㅠ" },
{ date: "2022-11-13", time: "12:51", type: "text", text: "비올수도 있으니까" },
{ date: "2022-11-13", time: "12:51", type: "text", text: "우산 챙겨!!" },
{ date: "2022-11-13", time: "12:55", type: "text", text: "ㅋㅋㅋㅋ 맞아" },
{ date: "2022-11-13", time: "12:55", type: "text", text: "주말은 침대에서 뒹굴뒹굴하는게 최고지!" },
{ date: "2022-11-13", time: "13:01", type: "text", text: "나는 더운날씨보다는 추운날씨가 좋더라!" },
{ date: "2022-11-13", time: "13:01", type: "text", text: "그래서 여행도 추운곳으로 가는거 좋아해!" },
{ date: "2022-11-13", time: "13:03", type: "text", text: "나 알래스카 여행 다녀온 적 있어 ㅎㅎ" },
{ date: "2022-11-13", time: "13:04", type: "text", text: "대학생때 봄방학때 친한 형들하고 다녀왔어!" },
{ date: "2022-11-13", time: "13:04", type: "text", text: "아주 중요한 미션을 가지고 여행을 계획했었지..." },
{ date: "2022-11-13", time: "13:05", type: "text", text: "ㅋㅋㅋ 가서 만년설로 빙수 만들어먹기!" },
{ date: "2022-11-13", time: "13:06", type: "text", text: "팥하고 연유하고 다 사갔어! ㅋㅋㅋ" },
{ date: "2022-11-13", time: "13:09", type: "text", text: "응 ㅋㅋㅋ 가서 씨리얼까지 사서 만들어먹었어!" },
{ date: "2022-11-13", time: "13:09", type: "text", text: "완전 맛있었어 ㅎㅎ" },
{ date: "2022-11-13", time: "13:10", type: "text", text: "이글루도 만들었었다! ㅋㅋㅋ" },
{ date: "2022-11-13", time: "13:16", type: "drive-image", driveId: "1aahLam_1RT_jgGoCg6Aq3WlAvEWTxkD6", alt: "알래스카에서 만든 이글루 사진" },
{ date: "2022-11-13", time: "13:16", type: "text", text: "짠 ㅋㅋ" },
{ date: "2022-11-13", time: "22:33", type: "text", text: "어제 오늘 음방 응원하러 와준 런즈들 너무 고마워" },
{ date: "2022-11-13", time: "22:34", type: "text", text: "그리고 방송으로 보면서 응원해준 런즈들도 너무 고마워!" },
{ date: "2022-11-13", time: "22:35", type: "text", text: "이 고마운 마음을 어떻게 다 전할 수 있을까.. ㅠㅠ" },
{ date: "2022-11-13", time: "22:37", type: "drive-image", driveId: "1fZUGZp2YRPZL7kb6yKH0IHjVgTL20znm", alt: "건일 셀카" },
{ date: "2022-11-13", time: "22:38", type: "drive-image", driveId: "16jz9ycZ529Uv0koGIC-DkuVGQe0UNFxM", alt: "상처 분장 셀카" },
{ date: "2022-11-13", time: "22:38", type: "drive-image", driveId: "1cYrNiCTFUBMN05egxxONJinDU34Q3-6k", alt: "상처 분장 셀카" },
{ date: "2022-11-13", time: "22:41", type: "text", text: "ㅎㅎ 상처분장 첨 해봤는데" },
{ date: "2022-11-13", time: "22:41", type: "text", text: "잘 어울리는거 같아!! ㅋㅋㅋ" },
{ date: "2022-11-13", time: "22:45", type: "text", text: "웅웅 ㅎㅎ 진짜로는 안다치게 조심할게!!!" },
{ date: "2022-11-13", time: "22:45", type: "text", text: "@@@도 항상 조심해야해" },
{ date: "2022-11-13", time: "22:45", type: "text", text: "차도 건널때 양옆 살피고 건너고" },
{ date: "2022-11-13", time: "22:45", type: "text", text: "밤 늦게 다니지 말구" },
{ date: "2022-11-13", time: "22:46", type: "text", text: "횡단보도 건널때 손 들고 건너고" },
{ date: "2022-11-13", time: "22:48", type: "text", text: "ㅋㅋㅋㅋㅋㅋㅋ" },
{ date: "2022-11-13", time: "22:51", type: "text", text: "이제 일요일도 다 끝나가네 ㅠㅠㅠㅠ" },
{ date: "2022-11-13", time: "22:53", type: "text", text: "@@@ 생각하면서 월요일 버텨야겠다" },
{ date: "2022-11-13", time: "22:58", type: "text", text: "ㅎㅎ 내가 힘이 될 수 있다니 너무 감사하다" },
	{ date: "2022-11-12", time: "06:02", type: "text", text: "하이~" },
{ date: "2022-11-12", time: "06:02", type: "text", text: "굿모닝!" },
{ date: "2022-11-12", time: "06:03", type: "text", text: "뭐야" },
{ date: "2022-11-12", time: "06:03", type: "text", text: "@@@" },
{ date: "2022-11-12", time: "06:03", type: "text", text: "왜이렇게 일찍 일어났엉!" },
{ date: "2022-11-12", time: "06:14", type: "text", text: "드디어 첫 음방이당 ㅠㅠ" },
{ date: "2022-11-12", time: "06:14", type: "text", text: "너무 설레" },
{ date: "2022-11-12", time: "06:15", type: "text", text: "뮤직비디오는 어때?!" },
{ date: "2022-11-12", time: "06:16", type: "text", text: "ㅎㅎㅎ" },
{ date: "2022-11-12", time: "06:17", type: "text", text: "응원법 영상도 봤지?!" },
{ date: "2022-11-12", time: "06:19", type: "text", text: "ㅎㅎ 음방때 오면 힘차게 같이 외쳐주고!" },
{ date: "2022-11-12", time: "06:19", type: "text", text: "이번 음방 활동때 못오면" },
{ date: "2022-11-12", time: "06:19", type: "text", text: "우리 콘서트때 힘차게 외쳐줘!!" },
{ date: "2022-11-12", time: "13:10", type: "text", text: "헤이헤이" },
{ date: "2022-11-12", time: "13:10", type: "text", text: "점심 먹었어?" },
{ date: "2022-11-12", time: "13:11", type: "text", text: "응응 ㅎㅎ 난 초밥 먹었어!" },
{ date: "2022-11-12", time: "14:47", type: "text", text: "비온다 ㅠㅠㅠ" },
{ date: "2022-11-12", time: "14:47", type: "text", text: "우산 챙겼어??" },
{ date: "2022-11-12", time: "17:00", type: "drive-image", driveId: "15USJpNGLITdAO4_mRBiMZ00GIHDyjrb1" },
{ date: "2022-11-12", time: "17:00", type: "drive-image", driveId: "1UH0F0TatUXH2HmWshf4taPsLMO4uCQj3" },
{ date: "2022-11-12", time: "19:20", type: "text", text: "@@@" },
{ date: "2022-11-12", time: "19:20", type: "text", text: "저녁 먹었어?" },
	{ date: "2022-11-11", time: "00:02", type: "text", text: "내일 드디어 컴백이당" },
{ date: "2022-11-11", time: "00:02", type: "text", text: "아 이제 오늘이구나 ㅋㅋ" },
{ date: "2022-11-11", time: "00:03", type: "text", text: "우리 드디어 보는구나 ㅠㅠ" },
{ date: "2022-11-11", time: "00:05", type: "text", text: "너무 설렌당" },
{ date: "2022-11-11", time: "00:06", type: "text", text: "뭐가 젤 기대돼?" },
{ date: "2022-11-11", time: "00:07", type: "text", text: "ㅎㅎㅎ" },
{ date: "2022-11-11", time: "00:09", type: "text", text: "이제 슬슬 자기 전에" },
{ date: "2022-11-11", time: "00:09", type: "text", text: "노래 추천 하나 해줄게!" },
{ date: "2022-11-11", time: "00:10", type: "text", text: "JVKE - golden hour" },
{ date: "2022-11-11", time: "00:11", type: "text", text: "며칠전에 알게된 노래인데, 넘 좋아서 계속 듣는중이야" },
{ date: "2022-11-11", time: "00:16", type: "text", text: "ㅎㅎ" },
{ date: "2022-11-11", time: "00:16", type: "text", text: "난 이만 먼저 자러가볼겡" },
{ date: "2022-11-11", time: "00:16", type: "text", text: "잘자" },
{ date: "2022-11-11", time: "00:16", type: "text", text: "🌙" },
{ date: "2022-11-11", time: "20:33", type: "text", text: "안뇽" },
{ date: "2022-11-11", time: "20:36", type: "text", text: "머행!" },
	{ date: "2022-11-10", time: "12:58", type: "text", text: "@@@" },
{ date: "2022-11-10", time: "12:58", type: "text", text: "뭐하구있어!" },
{ date: "2022-11-10", time: "12:58", type: "emote", src: "emotes/crying.png" },
{ date: "2022-11-10", time: "12:58", type: "text", text: "오랜만이야" },
{ date: "2022-11-10", time: "13:05", type: "text", text: "ㅎㅎ 나두" },
{ date: "2022-11-10", time: "13:05", type: "text", text: "점심은 먹었어?" },
{ date: "2022-11-10", time: "13:55", type: "text", text: "ㅎㅎ 난 방금 햄버거 먹었다!" },
{ date: "2022-11-10", time: "13:56", type: "text", text: "콜라는 역시 제로콜라~" },
{ date: "2022-11-10", time: "14:30", type: "text", text: "@@@" },
{ date: "2022-11-10", time: "14:45", type: "text", text: "아픈데는 없어?" },
{ date: "2022-11-10", time: "18:49", type: "text", text: "응응 ㅋㅋ 난 아픈데 없어!" },
{ date: "2022-11-10", time: "22:32", type: "text", text: "@@@" },
{ date: "2022-11-10", time: "22:32", type: "text", text: "뭐해" },
{ date: "2022-11-10", time: "23:54", type: "text", text: "ㅋㅋㅋㅋ 락더월드 어땠어?" },
{ date: "2022-11-10", time: "23:58", type: "text", text: "ㅋㅋㅋㅋㅋㅋㅋ" },
{ date: "2022-11-10", time: "23:58", type: "text", text: "재밌었다니" },
{ date: "2022-11-10", time: "23:58", type: "text", text: "넘 뿌듯하다" },
{ date: "2022-11-10", time: "23:58", type: "text", text: "아직 못봤으면... 아껴놨다 나중에 꼭 봐줘!!" },
	{ date: "2022-10-30", time: "00:29", type: "text", text: "앙뇽" },
{ date: "2022-10-30", time: "00:30", type: "text", text: "방금 뜬거 봤어?! ㅋㅋㅋ" },
{ date: "2022-10-30", time: "00:39", type: "text", text: "ㅎㅎㅎㅎ 어땠어?!" },
{ date: "2022-10-30", time: "00:46", type: "text", text: "ㅋㅋㅋㅋ 고마워" },
{ date: "2022-10-30", time: "00:46", type: "text", text: "이번 머리색 어때!" },
{ date: "2022-10-30", time: "00:49", type: "text", text: "ㅎㅎ 우리 이제 좀만 더 있으면 보겠구나" },
{ date: "2022-10-30", time: "00:49", type: "text", text: "지난 활동보다도 더 멋진 모습 많이 보여줄게!! 기대해줘 😎" },
{ date: "2022-10-30", time: "00:50", type: "text", text: "아 잠만" },
{ date: "2022-10-30", time: "00:50", type: "text", text: "생각해보니까 우리 생각보다 빨리 보겠구나?" },
{ date: "2022-10-30", time: "00:51", type: "text", text: "오늘 밤 내 꿈에서 ㅎㅎ" },
{ date: "2022-10-30", time: "00:52", type: "text", text: "하핫.. 미안" },
{ date: "2022-10-30", time: "00:52", type: "text", text: "머쓱" },
{ date: "2022-10-30", time: "00:52", type: "text", text: "😗" },
{ date: "2022-10-30", time: "00:54", type: "text", text: "그거 알아?" },
{ date: "2022-10-30", time: "00:54", type: "text", text: "우리 버블 10일이다" },
{ date: "2022-10-30", time: "00:54", type: "text", text: "10일 달라고...?" },
{ date: "2022-10-30", time: "00:55", type: "text", text: "허허허.." },
{ date: "2022-10-30", time: "01:00", type: "text", text: "안자구 머하는 중이얌" },
{ date: "2022-10-30", time: "01:00", type: "text", text: "ㅋㅋㅋ 무슨 얘기 하구싶어" },
{ date: "2022-10-30", time: "01:02", type: "text", text: "나 오늘 머했냐구?!" },
{ date: "2022-10-30", time: "01:02", type: "text", text: "오늘 하루 종일 열심히 연습했오 ㅎㅎ" },
{ date: "2022-10-30", time: "01:03", type: "text", text: "밥은 점심은 햄버거, 저녁은 갈비탕!" },
{ date: "2022-10-30", time: "01:04", type: "text", text: "자기전 노래 추천..?!" },
{ date: "2022-10-30", time: "01:04", type: "text", text: "흠 뭐가 좋을까.." },
{ date: "2022-10-30", time: "01:07", type: "text", text: "HONNE - Day 1 (Brooklyn Session)" },
{ date: "2022-10-30", time: "01:07", type: "text", text: "이거 들으면서 @@@ 생각하면서 잘거야" },
{ date: "2022-10-30", time: "01:10", type: "text", text: "ㅎㅎ 듣고있어?" },
{ date: "2022-10-30", time: "01:13", type: "text", text: "ㅎㅎ 방금 곡 처럼 밤에 듣기 좋은 잔잔한 곡들" },
{ date: "2022-10-30", time: "01:13", type: "text", text: "앞으로도 생각날 때 마다 하나씩 하나씩 나눠줄게!!" },
{ date: "2022-10-30", time: "01:15", type: "text", text: "내일 아침에 들을 노래?!" },
{ date: "2022-10-30", time: "01:15", type: "text", text: "흠.." },
{ date: "2022-10-30", time: "01:17", type: "text", text: "HONNE - free love" },
{ date: "2022-10-30", time: "01:17", type: "text", text: "ㅋㅋㅋ 또 혼네다" },
{ date: "2022-10-30", time: "01:19", type: "text", text: "나 혼네 진짜 짱팬이야" },
{ date: "2022-10-30", time: "01:19", type: "text", text: "거의 모르는 곡 없어 ㅋㅋ" },
{ date: "2022-10-30", time: "01:22", type: "text", text: "음 혼네 최애곡...?? 너무 많은데" },
{ date: "2022-10-30", time: "01:23", type: "text", text: "나중에 알려줘야지~~ 😛" },
{ date: "2022-10-30", time: "01:24", type: "text", text: "오케이! 그럼 딱 이거까지만 알려주고" },
{ date: "2022-10-30", time: "01:24", type: "text", text: "난 자러갈겡 ㅎㅎ" },
{ date: "2022-10-30", time: "01:25", type: "text", text: "HONNE - Warm on a cold night" },
{ date: "2022-10-30", time: "01:26", type: "text", text: "잘자 @@@! 🌙" },
	{ date: "2022-10-28", time: "15:59", type: "drive-image", driveId: "1sNy9ORQF0yvnm_4adTkzcQM5B2Xsp7Nd" },
{ date: "2022-10-28", time: "15:59", type: "text", text: "오늘 날씨 완전 좋다" },
{ date: "2022-10-28", time: "15:59", type: "text", text: "하늘도 완전 파란색" },
{ date: "2022-10-28", time: "16:16", type: "text", text: "응응 ㅎㅎ 춥진 않아!" },
{ date: "2022-10-28", time: "17:48", type: "text", text: "나 이것저것 할 일 하다가 이제 저녁먹으려구!" },
{ date: "2022-10-28", time: "17:50", type: "text", text: "저녁 딤섬 먹으려구!" },
{ date: "2022-10-28", time: "19:09", type: "text", text: "ㅎㅎ 넌 뭐먹었어!" },
{ date: "2022-10-28", time: "20:09", type: "text", text: "오오!" },
{ date: "2022-10-28", time: "20:09", type: "text", text: "난 새우딤섬 먹었어 ㅎㅎ" },
{ date: "2022-10-28", time: "20:09", type: "text", text: "짱맛있었어" },
{ date: "2022-10-28", time: "20:11", type: "text", text: "응응 ㅋㅋㅋ 나 새우 완전 좋아해" },
{ date: "2022-10-28", time: "20:12", type: "text", text: "새우튀김, 새우깡, 새우버거, 새우만두, 새우피자, 새우볼 등등" },
{ date: "2022-10-28", time: "20:12", type: "text", text: "다 완전 좋아해" },
{ date: "2022-10-28", time: "20:35", type: "text", text: "슈슈버거 vs 새우딤섬 ???" },
{ date: "2022-10-28", time: "20:35", type: "text", text: "음 너무 어렵다.." },
{ date: "2022-10-28", time: "22:44", type: "text", text: "오늘 하루 잘 보냈어?!" },
{ date: "2022-10-28", time: "22:44", type: "text", text: "우린 합주 연습중!" },
{ date: "2022-10-28", time: "22:47", type: "text", text: "와... 우리 이제 다음주면 볼 수 있는거야????!" },
{ date: "2022-10-28", time: "22:54", type: "text", text: "나도 실감이 안난다 ㅠㅠ" },
	{ date: "2022-10-27", time: "01:17", type: "text", text: "ㅠㅠ 미안해.. 지석이하고 둘이 같이 연습하느라고 이제야 다시 왔당.." },
{ date: "2022-10-27", time: "01:18", type: "text", text: "늦었는데 안자구 머하구있어써" },
{ date: "2022-10-27", time: "01:20", type: "text", text: "ㅎㅎ 기다려줘서 고마워" },
{ date: "2022-10-27", time: "01:34", type: "text", text: "난 드뎌 침대에 누웠당 ㅎㅎ" },
{ date: "2022-10-27", time: "01:38", type: "text", text: "자기전에 노래 하나 추천해줘두 될까?!" },
{ date: "2022-10-27", time: "01:39", type: "text", text: "LUCY - Knowhow" },
{ date: "2022-10-27", time: "01:39", type: "text", text: "루시 선배님들 곡 완전 좋아!" },
{ date: "2022-10-27", time: "01:42", type: "text", text: "ㅋㅋㅋㅋ 코드 진행이 내 취향저격이야" },
{ date: "2022-10-27", time: "01:43", type: "emote", src: "emotes/music.png" },
{ date: "2022-10-27", time: "01:43", type: "text", text: "후렴 멜로디도 미쳤어" },
{ date: "2022-10-27", time: "01:44", type: "text", text: "나 나나나 나나 나나나나~ (흥얼거리는중)" },
{ date: "2022-10-27", time: "01:44", type: "text", text: "다른 사람인척 하는건~~ 🎶🎵" },
{ date: "2022-10-27", time: "01:51", type: "drive-video", driveId: "1XXFmqTQ5E3atW-qqzClAQ90wHk9b_btM" },
{ date: "2022-10-27", time: "01:52", type: "text", text: "밤이니까 조용하게 한소절!" },
{ date: "2022-10-27", time: "01:53", type: "text", text: "ㅋㅋㅋ 고마워" },
{ date: "2022-10-27", time: "01:54", type: "text", text: "보내고 나니까 부끄럽넹" },
{ date: "2022-10-27", time: "01:54", type: "text", text: "이만 자러 도망가볼게... ㅋㅋㅋ" },
{ date: "2022-10-27", time: "01:54", type: "text", text: "@@@ 잘자!" },
{ date: "2022-10-27", time: "08:59", type: "text", text: "굿 모닝~! ☀️" },
{ date: "2022-10-27", time: "09:11", type: "text", text: "아침으로 에그 샌드위치하구 아아 마시구있엉" },
{ date: "2022-10-27", time: "09:12", type: "text", text: "ㅋㅋ 응응 난 아침에 밥은 좀 헤비하더라구" },
{ date: "2022-10-27", time: "09:12", type: "text", text: "간단하게 빵이나 샌드위치가 좋더라!" },
{ date: "2022-10-27", time: "09:18", type: "text", text: "응응 오늘도 열심히 연습 달려야징!" },
{ date: "2022-10-27", time: "16:24", type: "text", text: "@@@" },
{ date: "2022-10-27", time: "16:24", type: "text", text: "오늘 날씨 짱좋다" },
{ date: "2022-10-27", time: "16:24", type: "text", text: "뭐하구이써!" },
{ date: "2022-10-27", time: "16:27", type: "text", text: "날씨 더 추워지기 전에" },
{ date: "2022-10-27", time: "16:27", type: "text", text: "오늘 저녁에라도 산책도 좀 하구 그랭 ㅠㅠ" },
{ date: "2022-10-27", time: "16:28", type: "text", text: "오 한강 좋다 ㅎㅎ" },
{ date: "2022-10-27", time: "16:28", type: "text", text: "나도 한강 가고싶당" },
{ date: "2022-10-27", time: "17:11", type: "text", text: "저녁은 뭐 먹을거야?" },
{ date: "2022-10-27", time: "22:13", type: "text", text: "미안 ㅠㅠ 너무 늦게왔지" },
{ date: "2022-10-27", time: "22:13", type: "text", text: "저녁 맛있게 먹었어?!" },
	{ date: "2022-10-26", time: "09:54", type: "text", text: "@@@" },
{ date: "2022-10-26", time: "09:54", type: "text", text: "굿모닝" },
{ date: "2022-10-26", time: "09:55", type: "text", text: "응 ㅎㅎ 잘 잤어" },
{ date: "2022-10-26", time: "09:55", type: "emote", src: "emotes/wakeup.png" },
{ date: "2022-10-26", time: "09:56", type: "text", text: "이 햄스터 이모티콘 진짜 넘 귀여운거같아 ㅋㅋㅋㅋ" },
{ date: "2022-10-26", time: "10:01", type: "text", text: "아침은 먹었어?" },
{ date: "2022-10-26", time: "10:03", type: "text", text: "난 아까 간단하게 먹었으 ㅎㅎㅎ" },
{ date: "2022-10-26", time: "10:03", type: "text", text: "커피하고 빵" },
{ date: "2022-10-26", time: "10:04", type: "text", text: "사실 해바라기씨 먹었어" },
{ date: "2022-10-26", time: "10:04", type: "emote", src: "emotes/seeds.png" },
{ date: "2022-10-26", time: "10:51", type: "text", text: "ㅋㅋㅋㅋ @@@ 보고싶다" },
{ date: "2022-10-26", time: "10:51", type: "text", text: "뭐하구이써" },
{ date: "2022-10-26", time: "14:05", type: "text", text: "아프다구??" },
{ date: "2022-10-26", time: "14:05", type: "text", text: "아프지마 ㅠㅠ" },
{ date: "2022-10-26", time: "14:05", type: "text", text: "@@@ 아프면 내 맘도 아파.." },
{ date: "2022-10-26", time: "14:09", type: "text", text: "점심은 먹었어?" },
{ date: "2022-10-26", time: "14:09", type: "text", text: "나두 배고프당" },
{ date: "2022-10-26", time: "18:26", type: "text", text: "나는 돈까스 챙겨먹었다!" },
{ date: "2022-10-26", time: "18:27", type: "text", text: "ㅋㅋㅋ 돈까스 오랜만이야" },
{ date: "2022-10-26", time: "18:27", type: "text", text: "내 최애돈까스는 고구마 돈까스~" },
{ date: "2022-10-26", time: "22:38", type: "text", text: "@@@" },
{ date: "2022-10-26", time: "22:39", type: "text", text: "오늘 하루 잘 보냈어?!" },
{ date: "2022-10-26", time: "22:50", type: "text", text: "ㅎㅎ 난 연습중" },
{ date: "2022-10-26", time: "22:50", type: "text", text: "오늘 재밌는일은 없었어?!" },
  {
    date: "2022-10-21",
    time: "11:14",
    type: "text",
    text: "빌런즈~~! 우리 런즈를 너무 사랑하는 엑디즈 건일이에요 🙂 버블을 통해 서로 더 가깝고 즐겁게 소통할 수 있게 되어서 넘 설레고 기뻐요! 함께 대화하면서 우리 더 친해져봐요!! 잘 부탁드려요 :)"
  },
  {
  date: "2022-10-21",
  time: "12:37",
  type: "text",
  text: "@@@"
},
{
  date: "2022-10-21",
  time: "12:37",
  type: "text",
  text: "머해"
},
{
  date: "2022-10-21",
  time: "12:38",
  type: "text",
  text: "ㅋㅋㅋㅋㅋ"
},
{
  date: "2022-10-21",
  time: "12:38",
  type: "text",
  text: "밥은 먹었엉?!"
},
{
  date: "2022-10-21",
  time: "12:42",
  type: "text",
  text: "ㅋㅋㅋ 난 아직"
},
{
  date: "2022-10-21",
  time: "12:42",
  type: "text",
  text: "일어난지 얼마 안됐으 ㅎㅎ"
},
{
  date: "2022-10-21",
  time: "12:42",
  type: "text",
  text: "나 샤워부터 하고 올겡"
},
{
  date: "2022-10-21",
  time: "12:45",
  type: "text",
  text: "아 맞아 @@@"
},
{
  date: "2022-10-21",
  time: "12:45",
  type: "text",
  text: "나 닉네임 뭐하면 좋을지 추천좀 해주라!!"
},
{
  date: "2022-10-21",
  time: "14:22",
  type: "text",
  text: "으..."
},
{
  date: "2022-10-21",
  time: "14:22",
  type: "text",
  text: "곧 리허설인데"
},
{
  date: "2022-10-21",
  time: "14:22",
  type: "text",
  text: "떨린다.."
},
{
  date: "2022-10-21",
  time: "14:22",
  type: "text",
  text: "ㅎㅎ 응원해줘서 고마웡"
},
{
  date: "2022-10-21",
  time: "14:22",
  type: "text",
  text: "역시 @@@밖에 없다 💕"
},
{
  date: "2022-10-21",
  time: "19:07",
  type: "text",
  text: "헤이 @@@"
},
{
  date: "2022-10-21",
  time: "19:07",
  type: "text",
  text: "머하구이써"
},
{
  date: "2022-10-21",
  time: "19:07",
  type: "text",
  text: "난 저녁먹는중!"
},
{
  date: "2022-10-21",
  time: "19:13",
  type: "text",
  text: "난 여기 공연장 케이터링 뷔페 먹는 중 ㅎㅎ"
},
{
  date: "2022-10-21",
  time: "19:13",
  type: "text",
  text: "필리핀 현지 음식 맛있는거 짱 많아"
},
{
  date: "2022-10-21",
  time: "19:13",
  type: "text",
  text: "@@@랑 같이 먹었으면 더 좋았을탠데 ㅠㅠ"
},
{
  date: "2022-10-21",
  time: "22:13",
  type: "text",
  text: "@@@"
},
{
  date: "2022-10-21",
  time: "22:13",
  type: "text",
  text: "많이 기다렸지 ㅠㅠ"
},
{
  date: "2022-10-21",
  time: "22:13",
  type: "text",
  text: "나 이제 막 공연 끝나구 왔어!"
},
{
  date: "2022-10-21",
  time: "22:16",
  type: "text",
  text: "응응!!"
},
{
  date: "2022-10-21",
  time: "22:16",
  type: "text",
  text: "오늘 진짜 재밌었어"
},
{
  date: "2022-10-21",
  time: "22:16",
  type: "text",
  text: "살면서 들어본 함성소리 중 제일 컸어 🔥🔥"
},
{
  date: "2022-10-21",
  time: "22:16",
  type: "text",
  text: "필리핀 런즈들 에너지 진짜 짱이더라"
},
  {
  date: "2022-10-21",
  time: "22:23",
  type: "drive-image",
  driveId: "1cyDlV_gj7-MUNBzAvfsGaBCuDb2yarHI"
},
  {
  date: "2022-10-21",
  time: "22:24",
  type: "text",
  text: "ㅋㅋㅋ 첫 호텔방 셀카닷"
},
{
  date: "2022-10-21",
  time: "22:28",
  type: "text",
  text: "@@@는 뭐하고있었어!"
},
{
  date: "2022-10-21",
  time: "22:40",
  type: "text",
  text: "ㅜㅜㅜ"
},
{
  date: "2022-10-21",
  time: "22:40",
  type: "text",
  text: "오늘도 고생 많았어"
},
{
  date: "2022-10-21",
  time: "22:52",
  type: "text",
  text: "나 새로 생긴 버킷리스트중 하나가"
},
{
  date: "2022-10-21",
  time: "22:52",
  type: "text",
  text: "전 세계 각 나라 과자 한번씩 다 먹어보는건데"
},
{
  date: "2022-10-21",
  time: "22:52",
  type: "text",
  text: "필리핀은 어떤 과자가 맛있는지 알아?!"
},
{
  date: "2022-10-21",
  time: "22:54",
  type: "text",
  text: "나도 몰라서 혹시 알까봐 물어본거였는데... 하핳"
},
{
  date: "2022-10-21",
  time: "22:54",
  type: "text",
  text: "머쓱"
},
{
  date: "2022-10-21",
  time: "22:24",
  type: "text",
  text: "머쓱타드"
},
{
  date: "2022-10-21",
  time: "22:56",
  type: "text",
  text: "ㅋㅋㅋㅋㅋㅋ"
},
{
  date: "2022-10-21",
  time: "22:56",
  type: "text",
  text: "내일 마트 갈건데"
},
{
  date: "2022-10-21",
  time: "22:56",
  type: "text",
  text: "가서 한번 맛있어보이는것들 다 사올게"
},
{
  date: "2022-10-22",
  time: "00:36",
  type: "text",
  text: "@@@"
},
{
  date: "2022-10-22",
  time: "00:36",
  type: "text",
  text: "인스트 샘플러 봤어??"
},
{
  date: "2022-10-22",
  time: "00:38",
  type: "text",
  text: "ㅋㅋㅋㅋㅋㅋㅋ"
},
{
  date: "2022-10-22",
  time: "00:38",
  type: "text",
  text: "어떤 곡이 젤 맘에들어?!"
},
{
  date: "2022-10-22",
  time: "00:44",
  type: "text",
  text: "오호"
},
{
  date: "2022-10-22",
  time: "00:44",
  type: "text",
  text: "내 최애곡은"
},
{
  date: "2022-10-22",
  time: "00:44",
  type: "text",
  text: "비밀~"
},
{
  date: "2022-10-22",
  time: "00:47",
  type: "text",
  text: "난 걍"
},
{
  date: "2022-10-22",
  time: "00:44",
  type: "text",
  text: "내 최애곡은"
},{
  date: "2022-10-22",
  time: "00:47",
  type: "text",
  text: "울 @@@가 좋아하는 곡이"
},
{
  date: "2022-10-22",
  time: "00:47",
  type: "text",
  text: "내 최애곡이징"
},
{
  date: "2022-10-22",
  time: "00:54",
  type: "text",
  text: "ㅋㅋㅋㅋ"
},
{
  date: "2022-10-22",
  time: "00:54",
  type: "text",
  text: "나 자기전에 들을 노래 하나 추천해주랑"
},
{
  date: "2022-10-22",
  time: "00:59",
  type: "text",
  text: "오옹"
},
  {
  date: "2022-10-22",
  time: "12:59",
  type: "text",
  text: "자기전에 계속 틀어놔야겟다"
},
{
  date: "2022-10-22",
  time: "01:03",
  type: "text",
  text: "자기전에 계속 틀어놔야겟다"
},
{
  date: "2022-10-22",
  time: "01:03",
  type: "text",
  text: "음 나는"
},
{
  date: "2022-10-22",
  time: "01:03",
  type: "text",
  text: "HYBS - Dancing with my phone"
},
{
  date: "2022-10-22",
  time: "01:03",
  type: "text",
  text: "요즘 매일 듣는 노래야"
},
{
  date: "2022-10-22",
  time: "01:08",
  type: "text",
  text: "ㅋㅋㅋ 같이 좋아하는 노래 공유 많이하자"
},
{
  date: "2022-10-22",
  time: "01:09",
  type: "text",
  text: "John Mayer - New Light"
},
{
  date: "2022-10-22",
  time: "01:09",
  type: "text",
  text: "이거는 지금 듣지 말고 꼭 내일 아침에 들어!"
},
{
  date: "2022-10-22",
  time: "01:09",
  type: "text",
  text: "약속"
},
{
  date: "2022-10-22",
  time: "01:51",
  type: "drive-video",
  driveId: "10ncTwxdoQzLDjAyMfeJO_Ki3a6JOOinc"
},
  {
  date: "2022-10-22",
  time: "11:50",
  type: "text",
  text: "하이하이"
},
{
  date: "2022-10-22",
  time: "11:50",
  type: "text",
  text: "굿모닝"
},
{
  date: "2022-10-22",
  time: "11:50",
  type: "text",
  text: "노래 들어봤엉?!"
},
{
  date: "2022-10-22",
  time: "11:54",
  type: "text",
  text: "ㅎㅎ 어때?"
},
{
  date: "2022-10-22",
  time: "11:54",
  type: "text",
  text: "요것도 요즘 매일 듣는 노래얌"
},
{
  date: "2022-10-22",
  time: "11:57",
  type: "text",
  text: "ㅋㅋㅋ 나 오늘은"
},
{
  date: "2022-10-22",
  time: "11:57",
  type: "text",
  text: "호텔에서 곡 작업도 좀 하구"
},
{
  date: "2022-10-22",
  time: "11:57",
  type: "text",
  text: "가사도 쓰구"
},
{
  date: "2022-10-22",
  time: "11:57",
  type: "text",
  text: "마트도 다녀오구 하려고!"
},
{
  date: "2022-10-22",
  time: "12:00",
  type: "text",
  text: "ㅋㅋㅋㅋ 응응 과자 사면 뭐 샀는지\n알려줄게!"
},
{
  date: "2022-10-22",
  time: "13:51",
  type: "text",
  text: "@@@"
},
{
  date: "2022-10-22",
  time: "13:51",
  type: "text",
  text: "머해"
},
{
  date: "2022-10-22",
  time: "13:52",
  type: "text",
  text: "ㅋㅋㅋㅋㅋ 나도 @@@ 생각중~"
},
  {
  date: "2022-10-22",
  time: "14:04",
  type: "drive-image",
  driveId: "19e9F9c0p1pgg5rwEN1ckkfbWaWT4k7cy"
},
{
  date: "2022-10-22",
  time: "14:04",
  type: "text",
  text: "운동하구왔엉"
},
{
  date: "2022-10-22",
  time: "15:03",
  type: "drive-image",
  driveId: "13T3R4l42mPViCM6C3uwW6eXM8nsH1xbn"
},
{
  date: "2022-10-22",
  time: "15:04",
  type: "text",
  text: "짜잔"
},
{
  date: "2022-10-22",
  time: "15:04",
  type: "text",
  text: "마트 다녀왔당"
},
{
  date: "2022-10-22",
  time: "15:40",
  type: "drive-image",
  driveId: "1izDaQ0fN_1tnuRI6WJvwAaywo1gLZwgg"
},
  {
  date: "2022-10-22",
  time: "15:40",
  type: "drive-image",
  driveId: "1QQhJ7AApyLM72Vyw_pqZaeIGrUoq1jV1"
},
{
  date: "2022-10-22",
  time: "15:40",
  type: "text",
  text: "요거 맛있당"
},
{
  date: "2022-10-22",
  time: "15:42",
  type: "text",
  text: "바닐라 콜라 사려고 할때"
},
{
  date: "2022-10-22",
  time: "15:42",
  type: "text",
  text: "옆에 사람들이 다 별로라고 말렸는데"
},
{
  date: "2022-10-22",
  time: "15:42",
  type: "text",
  text: "나는 줏대있게 직접 마셔보고 판단하겠다고 말하고 샀지 ㅋㅋ"
},
{
  date: "2022-10-22",
  time: "15:44",
  type: "text",
  text: "그리고 난 진짜 맛있는거 같아"
},
{
  date: "2022-10-22",
  time: "15:44",
  type: "text",
  text: "미국 살때 마셨던 cream soda 맛이야"
},
{
  date: "2022-10-22",
  time: "15:46",
  type: "text",
  text: "크림소다 진짜 맛있어! 나중에 미국가면 꼭 먹어봐!!"
},
{
  date: "2022-10-22",
  time: "15:47",
  type: "text",
  text: "혹시라도 뉴욕이나 보스턴 가게되면 알려줘"
},
{
  date: "2022-10-22",
  time: "15:47",
  type: "text",
  text: "내가 맛있는곳들, 꼭 가봐야하는 곳들 다 알려줄게"
},
{
  date: "2022-10-22",
  time: "15:47",
  type: "text",
  text: "내 페이보릿 스팟들도 ㅋㅋㅋ"
},
  {
  date: "2022-10-22",
  time: "16:13",
  type: "drive-image",
  driveId: "1QKKoJdPj0ycJX-xqEhsHP3BlvXGyBCTa"
},
{
  date: "2022-10-22",
  time: "16:13",
  type: "text",
  text: "짠"
},
{
  date: "2022-10-22",
  time: "16:13",
  type: "text",
  text: "옛날에 학교다닐때 날씨 좋았던 사진이당"
},
{
  date: "2022-10-22",
  time: "16:23",
  type: "drive-image",
  driveId: "14eszlJBFm7jm3QdADMKeKxGCEd5tQ3T7"
},
{
  date: "2022-10-22",
  time: "16:23",
  type: "text",
  text: "이건 구름 되게 신기했던 날 찍은 사진!! ㅋㅋ"
},
{
  date: "2022-10-22",
  time: "16:24",
  type: "text",
  text: "응응 자취방에서 학교가는길에 찍은 사진!"
},
{
  date: "2022-10-22",
  time: "16:25",
  type: "text",
  text: "나 학교 바로 옆에 살았거든 ㅋㅋㅋ"
},
{
  date: "2022-10-22",
  time: "16:26",
  type: "text",
  text: "자취 꿀팁??? 음"
},
{
  date: "2022-10-22",
  time: "16:26",
  type: "text",
  text: "빨래하고 방청소하는 날을 정해주는게 좋아"
},
{
  date: "2022-10-22",
  time: "16:26",
  type: "text",
  text: "안그러면 맨날 미루게 된당 ㅋㅋㅋㅋ"
},
{
  date: "2022-10-22",
  time: "16:27",
  type: "text",
  text: "사진들은 천천히 풀게 ㅎㅎ"
},
{
  date: "2022-10-22",
  time: "16:27",
  type: "text",
  text: "한번에 다 보여주면"
},
{
  date: "2022-10-22",
  time: "16:27",
  type: "text",
  text: "재미없어~"
},
{
  date: "2022-10-22",
  time: "17:26",
  type: "text",
  text: "ㅋㅋㅋㅋㅋ"
},
{
  date: "2022-10-22",
  time: "17:26",
  type: "text",
  text: "나 예전에 자취할때"
},
{
  date: "2022-10-22",
  time: "17:26",
  type: "text",
  text: "방 진짜 예쁘게 꾸미고 살았는데"
},
{
  date: "2022-10-22",
  time: "17:26",
  type: "text",
  text: "나중에 방 사진 보여줄게"
},
{
  date: "2022-10-22",
  time: "17:36",
  type: "text",
  text: "응응 ㅋㅋ 나름 aesthetic 하게 이쁘게 꾸몄다구~"
},
  {
  date: "2022-10-22",
  time: "20:07",
  type: "drive-image",
  driveId: "1oaDZQj8EUm6ufI4q1T_OqWS_6SOnH1zm"
},
{
  date: "2022-10-22",
  time: "20:07",
  type: "text",
  text: "저녁먹구왔당"
},
{
  date: "2022-10-22",
  time: "20:07",
  type: "text",
  text: "가운데 누구게 ㅋㅋㅋ"
},
{
  date: "2022-10-22",
  time: "20:21",
  type: "text",
  text: "ㅋㅋㅋ 정답은 정수"
},
{
  date: "2022-10-22",
  time: "20:21",
  type: "text",
  text: "귀엽게 나왔는데 생얼 부끄럽다구 가리구 올려달래 ㅎㅎ"
},
  {
  date: "2022-10-23",
  time: "00:00",
  type: "text",
  text: "@@@"
},
{
  date: "2022-10-23",
  time: "00:00",
  type: "text",
  text: "자?"
},
{
  date: "2022-10-23",
  time: "00:02",
  type: "text",
  text: "ㅋㅋㅋㅋ 늦었는데 안자고 뭐해"
},
{
  date: "2022-10-23",
  time: "00:54",
  type: "text",
  text: "늦었는데 얼렁 자 ㅎㅎ"
},
{
  date: "2022-10-23",
  time: "00:54",
  type: "text",
  text: "늦게자면 키 안큰다"
},
{
  date: "2022-10-23",
  time: "01:36",
  type: "text",
  text: "ㅎㅎ 지금쯤이면 자고있겠구먼"
},
{
  date: "2022-10-23",
  time: "01:36",
  type: "text",
  text: "@@@ 자고 일어나면 나 한국 도착해있을거야"
},
{
  date: "2022-10-23",
  time: "01:36",
  type: "text",
  text: "잘자 🌙"
},
{
  date: "2022-10-23",
  time: "06:02",
  type: "text",
  text: "오빠 한국 왔당"
},
{
  date: "2022-10-23",
  time: "06:02",
  type: "text",
  text: "새벽이라 피곤할텐데 공항까지 오구 그래 참"
},
{
  date: "2022-10-23",
  time: "06:02",
  type: "text",
  text: "얼른 조심히 들어가! 잠도 좀 자구 🌙"
},
{
  date: "2022-10-23",
  time: "14:46",
  type: "text",
  text: "@@@"
},
{
  date: "2022-10-23",
  time: "14:46",
  type: "text",
  text: "뭐하닝"
},
{
  date: "2022-10-23",
  time: "14:49",
  type: "text",
  text: "ㅋㅋㅋ 난 방 청소하다가 과자먹고있었어"
},
{
  date: "2022-10-23",
  time: "14:49",
  type: "drive-image",
  driveId: "1yLmorNP5ugjn8uyOxkgKZFLmlZ5nNQTW"
},
{
  date: "2022-10-23",
  time: "14:49",
  type: "text",
  text: "이거 완전 맛있음 🔥🔥"
},
{
  date: "2022-10-23",
  time: "14:57",
  type: "text",
  text: "ㅋㅋㅋ 뒤에 포스터는 연습생때부터 갖고있던거야"
},
{
  date: "2022-10-23",
  time: "18:05",
  type: "text",
  text: "@@@"
},
{
  date: "2022-10-23",
  time: "18:05",
  type: "text",
  text: "저녁 먹었어?"
},
{
  date: "2022-10-23",
  time: "18:08",
  type: "text",
  text: "나두 아직 안먹었오"
},
{
  date: "2022-10-23",
  time: "18:08",
  type: "text",
  text: "뭘 먹어야 잘 먹었다고 소문이 날까?"
},
{
  date: "2022-10-23",
  time: "19:33",
  type: "text",
  text: "ㅋㅋㅋ 결국 고민하다가"
},
{
  date: "2022-10-23",
  time: "19:33",
  type: "text",
  text: "국밥먹구 왔당"
},
{
  date: "2022-10-23",
  time: "19:33",
  type: "text",
  text: "수육 국밥 !!"
},
{
  date: "2022-10-23",
  time: "19:34",
  type: "text",
  text: "나 원래 순대국 더 좋아하는데"
},
{
  date: "2022-10-23",
  time: "19:34",
  type: "text",
  text: "오늘은 수육국밥 먹었어 ㅎㅎ"
},
{
  date: "2022-10-23",
  time: "19:37",
  type: "text",
  text: "예전에 보스턴 살때"
},
{
  date: "2022-10-23",
  time: "19:37",
  type: "text",
  text: "한국 음식 웬만한건 다 팔았거든"
},
{
  date: "2022-10-23",
  time: "19:37",
  type: "text",
  text: "근데 순대국만 없어서"
},
{
  date: "2022-10-23",
  time: "19:37",
  type: "text",
  text: "한국 들어오자마자 먹었던 음식이 순대국이야 ㅋㅋ"
},
{
  date: "2022-10-23",
  time: "20:37",
  type: "text",
  text: "너는 저녁 뭐 먹었엉"
},
{
  date: "2022-10-23",
  time: "21:02",
  type: "text",
  text: "ㅋㅋㅋㅋ 맛있는거 먹었네"
},
{
  date: "2022-10-23",
  time: "21:04",
  type: "text",
  text: "좀있으면 내 티저 올라온다"
},
{
  date: "2022-10-23",
  time: "21:04",
  type: "text",
  text: "두근두근"
},
{
  date: "2022-10-23",
  time: "21:25",
  type: "text",
  text: "ㅎㅎ 기다리는 동안 들을 노래 하나 추천!"
},
{
  date: "2022-10-23",
  time: "21:25",
  type: "text",
  text: "HYBS - Killer"
},
{
  date: "2022-10-23",
  time: "21:25",
  type: "text",
  text: "이 노래도 최근에 꽂혀서 계속 듣는중 😎"
},
{
  date: "2022-10-23",
  time: "23:43",
  type: "text",
  text: "후 두근두근"
},
{
  date: "2022-10-23",
  time: "23:43",
  type: "text",
  text: "30분도 안남았다!"
},
{
  date: "2022-10-23",
  time: "23:44",
  type: "text",
  text: "ㅋㅋㅋㅋ 너무 기대하지마"
},
{
  date: "2022-10-23",
  time: "23:44",
  type: "text",
  text: "기대가 크면 실망도 큰 법!"
},
	 { date: "2022-10-24", time: "01:03", text: "흐악" },
  { date: "2022-10-24", time: "01:03", text: "내 티저 봤어??" },
  { date: "2022-10-24", time: "01:06", text: "아 ㅋㅋㅋ 넘 부끄럽다" },
  { date: "2022-10-24", time: "01:09", text: "예전에는 카메라 앞에서 연기하고 막 그런거 되게 눈치보이고 부끄러웠는데" },
  { date: "2022-10-24", time: "01:09", text: "이번 활동 끝나고부터는 더 즐기게 된거같아 ㅋㅋ" },
  { date: "2022-10-24", time: "01:09", text: "그래서 이번에 진짜 몰입해서 촬영해봤어!" },
  { date: "2022-10-24", time: "01:13", text: "음.. 정확히 어떤 상황의 연기였는지는" },
  { date: "2022-10-24", time: "01:13", text: "나중에 가사 나오면 알게 될거야 ㅎㅎ" },
  { date: "2022-10-24", time: "01:13", text: "조금만~~ 기다려~~~" },
  { date: "2022-10-24", time: "01:14", text: "늦었는데 안자구 머해" },
  { date: "2022-10-24", time: "01:14", text: "ㅜㅜㅜ 나 기다려준거야?" },
  { date: "2022-10-24", time: "01:15", text: "진짜 감동" },
  { date: "2022-10-24", time: "01:15", text: "ㅎㅎ 고마워 칭찬 들으니까 기분 좋당" },
  { date: "2022-10-24", time: "01:22", text: "ㅎㅎ 난 지금 자려구" },
  { date: "2022-10-24", time: "01:22", text: "넘 졸리다 ㅏ" },
  { date: "2022-10-24", time: "01:23", text: "ㅋㅋㅋ 응응!" },
  { date: "2022-10-24", time: "01:23", text: "그랭 꿈에서 만나자! ㅎㅎ" },
  { date: "2022-10-24", time: "01:23", type: "emote", src: "emotes/sleep.png" },
  { date: "2022-10-24", time: "07:54", text: "굿모닝" },
  { date: "2022-10-24", time: "07:56", type: "emote", src: "emotes/wakeup.png" },
  { date: "2022-10-24", time: "07:56", text: "@@@" },
  { date: "2022-10-24", time: "07:56", text: "잘 잤어?" },
  { date: "2022-10-24", time: "08:07", text: "ㅋㅋㅋㅋㅋ 월요일..." },
  { date: "2022-10-24", time: "08:07", text: "힘내 파이팅이야" },
  { date: "2022-10-24", time: "12:12", text: "헤이헤이" },
  { date: "2022-10-24", time: "12:12", text: "방금 올라온거 봤어?!" },
  { date: "2022-10-24", time: "12:24", text: "ㅎㅎㅎㅎ 고마웡💕💕" },
  { date: "2022-10-24", time: "12:49", text: "이번 컨셉 어떤거 같아?!?!" },
  { date: "2022-10-24", time: "16:19", text: "ㅎㅎ 이제 곧 또 하나 올라온당!" },
  { date: "2022-10-24", time: "16:19", text: "나도 떨린다..." },
  { date: "2022-10-24", time: "20:03", text: "뭐하구이써!!" },
  { date: "2022-10-24", time: "20:04", text: "저녁은 먹었어??" },
  { date: "2022-10-24", time: "20:08", text: "웅웅 ㅎㅎ" },
  { date: "2022-10-24", time: "20:08", text: "잘 챙겨먹어야지 키 큰다~" },
  { date: "2022-10-24", time: "20:11", text: "월요일은 잘 보냈어?!" },
  { date: "2022-10-24", time: "20:29", text: "ㅎㅎ 나도 @@@ 덕분에 월요일 버텼징" },
  { date: "2022-10-24", time: "21:49", text: "맞아 월요일이 젤 힘들어 ㅠㅠ" },
  { date: "2022-10-24", time: "21:50", text: "그래도 내 티저 보면서 힘 냈다니 넘 뿌듯하다 ㅎㅎ" },
  { date: "2022-10-24", time: "21:56", text: "ㅋㅋㅋㅋ 땋은머리" },
  { date: "2022-10-24", time: "21:56", text: "처음에 너무 파격적일까봐 걱정했는데" },
  { date: "2022-10-24", time: "21:56", text: "귀엽게 잘 나온거 같아서 기분좋아" },
  { date: "2022-10-24", time: "21:56", type: "emote", src: "emotes/music.png" },
	{ date: "2022-10-25", time: "00:12", type: "text", text: "정수꺼 봤어?!" },
{ date: "2022-10-25", time: "00:12", type: "text", text: "멋있지!" },
{ date: "2022-10-25", time: "00:14", type: "text", text: "ㅋㅋㅋㅋ 울 아기고양이" },
{ date: "2022-10-25", time: "00:47", type: "text", text: "자기전 노래 추천해줄게!" },
{ date: "2022-10-25", time: "00:47", type: "text", text: "HONNE - it ain’t wrong loving you" },
{ date: "2022-10-25", time: "00:48", type: "text", text: "분위기 되게 좋아" },
{ date: "2022-10-25", time: "01:04", type: "text", text: "ㅎㅎ 나도 곡 하나만 추천해주라" },
{ date: "2022-10-25", time: "01:21", type: "text", text: "고마웡 ㅎㅎ" },
{ date: "2022-10-25", time: "01:21", type: "text", text: "자기전에 들어볼게" },
{ date: "2022-10-25", time: "01:32", type: "text", text: "오늘도 고생 많았어!!" },
{ date: "2022-10-25", time: "01:32", type: "text", text: "푹 자자구 낼 또 보자!!" },
{ date: "2022-10-25", time: "13:17", type: "text", text: "안뇽" },
{ date: "2022-10-25", time: "13:17", type: "text", text: "뭐해" },
{ date: "2022-10-25", time: "13:19", type: "text", text: "나도 방금 간단하게 점심 먹었오 ㅎㅎ" },
{ date: "2022-10-25", time: "14:46", type: "text", text: "나 미트파이!" },
{ date: "2022-10-25", time: "14:46", type: "text", text: "간단하면서 든든하게 먹기 좋더라구" },
{ date: "2022-10-25", time: "20:54", type: "text", text: "@@@" },
{ date: "2022-10-25", time: "20:54", type: "text", text: "오늘 날씨 좋다" },
{ date: "2022-10-25", time: "20:54", type: "text", text: "조금 춥긴 하지만.. ㅋㅋ" },
{ date: "2022-10-25", time: "20:55", type: "text", text: "난 따뜻하게 입었징!" },
{ date: "2022-10-25", time: "20:55", type: "text", text: "@@@는 뭐입었어" },
{ date: "2022-10-25", time: "21:00", type: "text", text: "더 추워지기 전에" },
{ date: "2022-10-25", time: "21:00", type: "text", text: "이 가을 날씨를 많이 즐겨야징 ㅎㅎ" },
{ date: "2022-10-25", time: "21:06", type: "text", text: "우와.. 광안리 다녀왔다구?" },
{ date: "2022-10-25", time: "21:06", type: "text", text: "부산 나도 너무 가고싶당.." },
{ date: "2022-10-25", time: "21:11", type: "text", text: "@@@ 저녁은 뭐 먹었옹" },
{ date: "2022-10-25", time: "21:45", type: "text", text: "ㅋㅋㅋ 난 설렁탕 먹었당" },
{ date: "2022-10-25", time: "21:46", type: "text", text: "설렁탕 먹으면서 밥을 설렁설렁~ 먹었어~" },
{ date: "2022-10-25", time: "21:47", type: "text", text: "아이고 내 배꼽 어디갔어 ㅋㅋㅋㅋㅋㅋ" },
{ date: "2022-10-25", time: "21:56", type: "text", text: ".. 미안" },
{ date: "2022-10-25", time: "21:56", type: "text", text: "자제할게.." },
{ date: "2022-10-25", time: "21:56", type: "emote", src: "emotes/despair.png" },
{ date: "2022-10-25", time: "21:58", type: "text", text: "ㅋㅋㅋㅌㅋ 그럼 나 아재개그 하나만 알려주라!" },
{ date: "2022-10-25", time: "22:12", type: "text", text: "ㅋㅋㅋㅋㅋㅋㅋ" },
{ date: "2022-10-25", time: "22:12", type: "text", text: "오케이 ㅋㅋㅋㅋㅋㅋ" },
{ date: "2022-10-25", time: "22:15", type: "text", text: "나보다 아재개그 고수구먼..." },
{ date: "2022-10-25", time: "22:15", type: "text", text: "한수 배웠어..." }
];
