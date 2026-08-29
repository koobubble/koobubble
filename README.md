# Bubble UI Screenshot Template

업로드한 참고 스크린샷의 레이아웃을 바탕으로 만든 정적 백업 템플릿입니다.

## 평소 수정하는 곳
- `data.js`: 이름 / 상태문구 / 프로필 / 배경 / 메시지
- `images/`: 프로필, 배경, 채팅 사진

## 프로필
`images/profile.jpg` 업로드 후:
```js
profile: "images/profile.jpg"
```

## 배경
`images/background.jpg` 업로드 후:
```js
background: "images/background.jpg"
```

## 텍스트 메시지
```js
{
  date: "2026-08-29",
  time: "19:02",
  type: "text",
  text: "오늘 뭐해"
},
```

줄바꿈:
```js
text: "첫째 줄\n둘째 줄"
```

## 사진 메시지
```js
{
  date: "2026-08-29",
  time: "19:05",
  type: "image",
  src: "images/260829_01.jpg"
},
```

## GitHub Pages
Repository → Settings → Pages
- Source: Deploy from a branch
- Branch: main
- Folder: /(root)
