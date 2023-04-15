import {offerAccordions} from "./app";
import {gallarySlider} from "./cottage-slider";
import {mainSlider} from "./main-slider";

if (document.querySelector('.cottage-slider__items')) {
  gallarySlider();
};

if(document.querySelector('.slider__line')){
  mainSlider();
};
offerAccordions();



