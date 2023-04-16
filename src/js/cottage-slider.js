export const gallarySlider = () => {
  let prevBtn = document.querySelector('.slider__btn-prev');
  let nextBtn = document.querySelector('.slider__btn-next');
  let sliderLine = document.querySelector('.cottage-slider__items');
  let offset = 0;


  nextBtn.addEventListener('click', function () {
    offset += 1230;
    if (offset > 6150) {
      offset = 0;
    }
    sliderLine.style.left = `${-offset}px`;
  });

  prevBtn.addEventListener('click', function () {
    offset -= 1230;
    if(offset < 0){
      offset = 6150;
    }
    sliderLine.style.left = `${-offset}px`;
  });
};

