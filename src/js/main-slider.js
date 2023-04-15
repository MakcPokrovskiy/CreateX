export const mainSlider = () => {
  let btnPrev = document.querySelector('.slider__btn-prev');
  let btnNext = document.querySelector('.slider__btn-next');
  let slidersLine = document.querySelector('.slider__line');
  let slides = document.querySelectorAll('.slide');
  let offset = 0;
  const viewport = document.querySelector('.slider__viewport');
  let widthViewport = getComputedStyle(viewport).width;
  let parseWidthView = parseInt(widthViewport);

  btnNext.addEventListener('click', () => {
    offset += parseWidthView;
    if (offset < parseWidthView * slides.length - 1) {
      offset++;
    } else {
      offset = 0;
    };
    slidersLine.style.left = `${-offset}px`;
  });

  btnPrev.addEventListener('click', () => {
    offset -= parseWidthView;
    if (offset < 0) {
      offset = parseWidthView * (slides.length - 1);
    } else {
      offset++;
    };
    slidersLine.style.left = `${-offset}px`;
  });


  // btnNext.addEventListener('click', () => {
  //   offset += 1920;
  //   if (offset > 3840) {
  //     offset = 0;
  //   };
  //   slidersLine.style.left = `${-offset}px`;
  // });
  //
  // btnPrev.addEventListener('click', () => {
  //   offset -= 1920;
  //   if (offset < 0) {
  //     offset = 3840;
  //   };
  //   slidersLine.style.left = `${-offset}px`;
  // });

};
