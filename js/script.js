const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slide');

let currentIndex = 0;

// 초기 이미지 활성화
images[currentIndex].classList.add('active');


// 이미지 슬라이드 함수
function slide(direction) {
  const currentImage = images[currentIndex];
  let nextIndex = currentIndex + direction;

  // 이미지 인덱스를 0과 2 사이로 유지
  if (nextIndex < 0) {
    nextIndex = images.length - 1;
  } else if (nextIndex >= images.length) {
    nextIndex = 0;
  }


  // 현재 이미지 숨기고 다음 이미지 보이
  images.forEach(image => 
                image.classList.remove('active'));
  images[currentIndex].classList.add('active');
       
    
  currentIndex = nextIndex;
}

// 터치 이벤트 처리
slider.addEventListener('touchstart', (event) => {
  const startX = event.touches[0].clientX;

  slider.addEventListener('touchmove', (event) => {
    event.preventDefault();
    const currentX = event.touches[0].clientX;
    const diffX = currentX - startX;

    // 왼쪽으로 스와이프하면 다음 이미지, 오른쪽으로 스와이프하면 이전 이미지
    if (diffX > 50) {
      slide(-1);
    } else if (diffX < -50) {
      slide(1);
    }
  });
});
