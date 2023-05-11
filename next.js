const prevBtn = document.querySelector('#prev-btn');
 const nextBtn = document.querySelector('#next-btn');
 const sliderItems = document.querySelectorAll('.slider-item');

 let currentSliderIndex = 0;

nextBtn.addEventListener('click', () => {
     sliderItems[currentSliderIndex].classList.remove('show');
     if(currentSliderIndex === sliderItems.length - 1) {
         currentSliderIndex = 0;
     } else {
         currentSliderIndex += 1;
     }
     sliderItems[currentSliderIndex].classList.add('show');
 });

 prevBtn.addEventListener('click', () => {
     sliderItems[currentSliderIndex].classList.remove('show');
     if(currentSliderIndex === 0){
         currentSliderIndex = sliderItems.length - 1;
     } else {
         currentSliderIndex -= 1;
     }
     sliderItems[currentSliderIndex].classList.add('show');
 });