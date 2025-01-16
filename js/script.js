const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;
const slideWidth = images[0].clientWidth;

const moveSlide = (index) => {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
};

const touchStart = (event) => {
  startX = event.touches[0].clientX;
};

const touchMove = (event) => {
  event.preventDefault();
  const currentX = event.touches[0].clientX;
  const diff = startX - currentX;

  slider.style.transform = `translateX(${-currentIndex * slideWidth + diff}px)`;
};

const touchEnd = (event) => {
  const currentX = event.changedTouches[0].clientX;
  const diff = startX - currentX;

  if (diff > 50) {
    currentIndex++;
  } else if (diff < -50) {
    currentIndex--;
  }

  currentIndex = Math.max(0, Math.min(currentIndex, images.length - 1));
  moveSlide(currentIndex);
};

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchmove', touchMove);
slider.addEventListener('touchend', touchEnd);
