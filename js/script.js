const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const descri = document.querySelectorAll('.description');
const figcap = document.querySelectorAll('figcaption');

const intervalTime = 3000;
let slideIndex = 0;

// 초기 이미지 활성화
slides[slideIndex].classList.add('active');
descri[slideIndex].classList.add('active');
figcap[slideIndex].classList.add('active');

// 자동 슬라이드 함수
function autoSlide(){
    slides[slideIndex].classList.remove('active');
    descri[slideIndex].classList.remove('active');
    figcap[slideIndex].classList.remove('active');
    
    slideIndex += 1;
    
    if(slideIndex >= slides.length){
      slideIndex = 0
    }
    slides[slideIndex].classList.add('active');
    descri[slideIndex].classList.add('active');
    figcap[slideIndex].classList.add('active');

}

// 이미지 슬라이드 함수
function showSlide(n) {
  slides[slideIndex].classList.remove('active');
  descri[slideIndex].classList.remove('active');
  figcap[slideIndex].classList.remove('active');
    
  slideIndex += n;
  
  if(slideIndex >= slides.length){
      slideIndex = 0
  }
  if(slideIndex < 0){
      slideIndex = slides.length - 1
  }
  slides[slideIndex].classList.add('active');
  descri[slideIndex].classList.add('active');
  figcap[slideIndex].classList.add('active');
    
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
      showSlide(-1);
    } else if (diffX < -50) {
      showSlide(1);
    }
  });
});


/*setInterval(autoSlide, intervalTime);*/