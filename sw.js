self.addEventListener('install', (e) => {
  console.log('서비스 워커 설치 완료');
});

self.addEventListener('fetch', (e) => {
  // 기본 네트워크 요청 처리
});
