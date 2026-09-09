DAY6 FAN PAGE

[파일 구성]
- index.html : 페이지 내용과 구조
- style.css  : 디자인 / 반응형 / 사진 확대 화면
- script.js  : 사진 확대 / 이전·다음 / 스와이프 기능

[GitHub Pages]
index.html, style.css, script.js 세 파일을 같은 폴더(저장소 최상단)에 올리면 됩니다.

[X / Twitter 게시물]
index.html에서 아래 부분을 찾으세요.

<a href="https://twitter.com/TwitterDev/status/560070183650213889"></a>

주소만 원하는 X 게시물 주소로 교체하면 됩니다.
X 공식 임베드 스크립트는 이미 index.html에 들어 있습니다.

[Instagram 게시물]
현재 INSTAGRAM 공식 게시물 Embed 영역은 자리표시용입니다.
Instagram 게시물에서 복사한 공식 Embed(퍼가기) 코드를
<div class="social-embed instagram-embed"> 안의
<div class="embed-guide">...</div> 대신 붙여 넣으면 됩니다.

Instagram 공식 embed.js도 index.html에 들어 있습니다.

[YouTube]
아래 주소에서 영상 ID만 원하는 영상 ID로 교체하세요.

https://www.youtube.com/embed/etcA8OjEV6s

예:
일반 영상 주소
https://www.youtube.com/watch?v=ABCDEFG

embed 주소
https://www.youtube.com/embed/ABCDEFG

페이지 안 재생과 전체화면을 지원합니다.

[사진]
현재 picsum.photos 주소들은 전부 예시 이미지입니다.
각 <img src="...">의 주소를 실제 이미지 주소로 교체하세요.

사진은 원본 비율로 표시됩니다.
사진 클릭 시 확대 화면이 열립니다.

[사진 확대 기능]
- 반투명 회청색 블러 배경
- 원본 비율 유지
- 이전 / 다음 버튼
- 키보드 ← / →
- ESC로 닫기
- 모바일 좌우 스와이프
- 배경을 눌러 닫기

[콘텐츠 추가]
<section class="post"> ... </section> 하나가 콘텐츠 한 덩어리입니다.
기존 section을 복사한 뒤 번호, 제목, 날짜, 내용만 바꾸면 됩니다.

예:
01 DAY6
02 X
03 Instagram
04 YouTube
05 Live Capture
06 Behind

순서나 제목은 자유롭게 바꿔도 됩니다.

[중요]
index.html / style.css / script.js는 반드시 같은 위치에 두세요.
파일명을 바꾸면 index.html 안의 연결 경로도 같이 수정해야 합니다.
