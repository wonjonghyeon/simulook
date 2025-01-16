const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slide');
let currentIndex = 0;

function moveSlide(index) {
  images.forEach((image, i) => {
    image.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

// 초기 슬라이드 설정
moveSlide(currentIndex);

// 터치 이벤트 처리
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  e.preventDefault();
  let touchX = e.touches[0].clientX;
  let diffX = startX - touchX;
  slider.style.transform = `translateX(${diffX}px)`;
});

slider.addEventListener('touchend', (e) => {
  let touchX = e.changedTouches[0].clientX;
  let diffX = startX - touchX;

  if (diffX > 50) { // 오른쪽으로 스와이프
    currentIndex = (currentIndex + 1) % images.length;
  } else if (diffX < -50) { // 왼쪽으로 스와이프
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  moveSlide(currentIndex);
});
