const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slide');

let currentIndex = 0;

// 초기 이미지 활성화
images[currentIndex].classList.add('active');

// 터치 이벤트 처리
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  e.preventDefault();
  let touchX = e.touches[0].clientX;
  let diffX = startX - touchX;

  // 스와이프 방향에 따라 다음/이전 이미지로 이동
  if (diffX > 50) { // 오른쪽으로 스와이프
    currentIndex = (currentIndex + 1) % images.length;
  } else if (diffX < -50) { // 왼쪽으로 스와이프
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  // 이전 이미지 비활성화, 현재 이미지 활성화
  images.forEach(image => image.classList.remove('active'));
  images[currentIndex].classList.add('active');
});
