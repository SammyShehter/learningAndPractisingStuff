/*
recommended HTML for this slider: 


<div class="wrap">
    <div class="slider-item">
        <img src="1.jpg" alt="slider">
    </div>
    <div class="slider-item fade">
        <img src="2.jpg" alt="slider">
    </div>
    <div class="slider-item fade">
        <img src="3.jpg" alt="slider">
    </div>
    <div class="slider-item fade">
        <img src="4.jpg" alt="slider">
    </div>

    <div class="prev"><div class="arrow-left"></div></div>
    <div class="next"><div class="arrow-right"></div></div>
</div>
<div class="slider-dots">
    <div class="dot dot-active"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div>
*/

//Slider Module

export default slider;

function slider(desiredSlideNumber = 0, slide = 'slider-item', prevButton = 'prev', nextButton = 'next', dotsWrapper = 'slider-dots', dot = 'dot') {
    let slideNumber = desiredSlideNumber;
    const slides = document.querySelectorAll(`.${slide}`);
    const prev = document.querySelector(`.${prevButton}`);
    const next = document.querySelector(`.${nextButton}`);
    const dotsWrap = document.querySelector(`.${dotsWrapper}`);
    const dots = document.querySelectorAll(`.${dot}`);

    function sliderCarousel(n) {
        if (n > slides.length - 1) {
            n = 0;
        }
        if (n < 0) {
            n = slides.length - 1;
        }

        slides.forEach((item) => {
            item.style.display = 'none';
        });
        dots.forEach((item) => {
            item.classList.remove('dot-active');
        });

        slides[n].style.display = 'block';
        dots[n].classList.add('dot-active');


        slideNumber = n;

    }


    function nextSlide(n) {
        sliderCarousel(slideNumber += n);
    }

    function currentSlide(n) {
        sliderCarousel(slideNumber = n);
    }

    prev.addEventListener('click', () => {
        nextSlide(-1);
    });
    next.addEventListener('click', () => {
        nextSlide(1);
    });

    dotsWrap.addEventListener('click', (event) => {
        for (let i = 0; i < slides.length; i++) {
            if (event.target == dots[i] && event.target.classList !== 'dot-active') {
                currentSlide(i);
            }
        }
    });

    sliderCarousel(desiredSlideNumber);
}

//Slider Module END

/*
Calling Slider function
    slider(); 
Just call this function to start the execution.
You can enter a number of the desired slide in order if you want to start execution with it.
*/


