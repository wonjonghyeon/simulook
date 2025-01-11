const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;

function showSlides(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex += n;
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  slides[slideIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  showSlides(-1);
});

nextBtn.addEventListener('click', () => {
  showSlides(1);
});

// 초기 이미지 활성화
slides[slideIndex].classList.add('active');
