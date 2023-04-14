export const mainSlider = () => {
  let btnPrev = document.querySelector('.slider__btn-prev');
  let btnNext = document.querySelector('.slider__btn-next');
  let slidersLine = document.querySelector('.slider__line');
  let offset = 0;

  btnNext.addEventListener('click', () => {
    offset += 1920;
    if (offset > 3840) {
      offset = 0;
    };
    slidersLine.style.left = `${-offset}px`;
  });

  btnPrev.addEventListener('click', () => {
    offset -= 1920;
    if (offset < 0) {
      offset = 3840;
    };
    slidersLine.style.left = `${-offset}px`;
  });

};
