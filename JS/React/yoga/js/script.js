window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //Tabs's function

    function tabs(tabClass, tabWrapperClass, tabContentClass) {

        const tab = document.querySelectorAll(`.${tabClass}`);
        const tabWrapper = document.querySelector(`.${tabWrapperClass}`);
        const tabContent = document.querySelectorAll(`.${tabContentClass}`);


        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        tabWrapper.addEventListener('click', (event) => {

            let target = event.target;

            if (target && target.classList.contains(`${tabClass}`)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                    }
                }
            }
        });

    }

    //Tabs's function END

    //Scroll up function

    function scrollUp(scrollUpButton) {

        let block = document.querySelector(`.${scrollUpButton}`);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                block.style.opacity = 1;
            } else {
                block.style.opacity = 0;
            }
        });

        block.addEventListener('click', () => {
            let scrollAnimation = setInterval(() => {
                let position = window.pageYOffset;

                if (position > 0) {
                    position -= 15;
                    document.documentElement.scrollTop = position;
                } else {
                    clearInterval(scrollAnimation);
                }
            }, 1);
        });

    }

    //Scroll up function END

    //Timer function

    const getDateDifference = (deadline) => {
        let t = (Date.parse(deadline) - Date.parse(new Date())) / 1000,
            seconds = Math.floor(t % 60),
            minutes = Math.floor(t / 60 % 60),
            hours = Math.floor(t / (60 * 60) % 24),
            days = Math.floor(t / (60 * 60 * 24));

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;
        days = days == 0 ? '' : days;

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        }
    }

    const timerElements = (id, deadline) => {
        let timer = document.querySelector(`#${id}`),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            devider = timer.querySelector('br');

        let setTimer = setInterval(updateClock, 1000);

        function clockFlashing(){
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';    
            setTimeout(() => {
                hours.textContent = '';
                minutes.innerHTML = '&#8199;&#8199;';
                seconds.textContent = '';
            },800); 
        }
        
        function updateClock() {
            let DateDifference = getDateDifference(deadline);

            if (DateDifference.days === '') {
                devider.remove();
                days.textContent = '';
            } else if (DateDifference.days === 1) {
                days.textContent = DateDifference.days + ' день и';
            } else if (DateDifference.days === 2 || DateDifference.days === 3 || DateDifference.days === 4) {
                days.textContent = DateDifference.days + ' дня и';
            } else {
                days.textContent = DateDifference.days + ' дней и';
            }

            hours.textContent = DateDifference.hours;
            minutes.textContent = DateDifference.minutes;
            seconds.textContent = DateDifference.seconds;

            if (DateDifference.total <= 0) {
                clearInterval(setTimer);
                days.textContent = '';
                devider.remove();
                let animation = setInterval(clockFlashing, 1600);
            }
        }
    }

    //Timer function END

    //Modal Window function

    const learnMoreBtnTimer = document.querySelector(".more");
    const popupOverlay = document.querySelector(".overlay");
    const closePopup = document.querySelector(".popup-close");
    const learnMoreBtnTabs = document.querySelector('.description-btn');
    const body = document.querySelector('body');
    const popup = document.querySelector('.popup');

    function showPopup() {
        popupOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    learnMoreBtnTimer.addEventListener('click', () => {
        showPopup();

    });

    learnMoreBtnTabs.addEventListener('click', () => {
        showPopup();
    });

    closePopup.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = '';
    });

    //Modal Window function END

    //Form 

    const message = {
        loading: "Ваш запрос обрабатывается",
        success: "Спасибо! Мы скоро с вами свяжемся =)",
        failure: "Чтото пошло не так =("
    };

    const form = document.querySelector('.main-form');
    const input = form.getElementsByTagName('input');
    const statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        form.appendChild(statusMessage);

        let request = new XMLHttpRequest;
        request.open('POST', 'server.php');

        /* Le standart form execution
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        let formData = new FormData(form);
        request.send(formData);
        */

        //Le JSON form execution
        request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
        let formData = new FormData(form);

        let obj = {};
        
        formData.forEach( (value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj)
        request.send(json);


        let p = new Promise( (resolve, reject) => {
            if(request.readyState < 4) {
                resolve();
                // ;
            }else if(request.readyState === 4 && request.status === 200){
                resolve(message.success);
                // statusMessage.textContent = message.success;
            } else {
                reject(new Error (message.failure))
                // statusMessage.textContent = message.failure;
            }
        });
        const clearInputs = () => {
            for(let i = 0; i < input.length; i++){
            input[i].value = '';
            }
        }

        request.addEventListener('readystatechange', () => {
            p
                .then( () => {statusMessage.textContent = message.loading})
                .then( () => {statusMessage.textContent = message.success})
                .catch( () => {statusMessage.textContent = message.failure})
                .then(clearInputs);
        });


        
    });

    // Form END

    //Slider Module
    let slideNumber = 0;
    const slides = document.querySelectorAll('.slider-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsWrap = document.querySelector('.slider-dots');
    const dots = document.querySelectorAll('.dot');

    function sliderCarousel(n) {
        if(n > slides.length - 1) {
            n = 0;
        }
        if(n < 0) {
            n = slides.length - 1;
        }

        slides.forEach((item) => {item.style.display = 'none';});
        dots.forEach((item) => {item.classList.remove('dot-active');});

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
        for(let i = 0; i < slides.length; i++){
            if(event.target == dots[i] && event.target.classList !== 'dot-active'){
                currentSlide(i);
            }
        }
    });

    //Slider Module END

    //Calc SAMMY
/*

    const calc = document.querySelectorAll('.counter-block-input');
    const baseLocation = document.getElementById('select');
    const totalPayment = document.getElementById('total');
    const peopleAmountInp = calc[0];
    const daysAmountInp = calc[1];
    

    let peopleAmount = 0;
    let daysAmount = 0;
    let coefficient = 1;

    peopleAmountInp.addEventListener('input', (e) => {
        peopleAmount = e.data;
        overallCalc(peopleAmount, daysAmount, coefficient);
    });
    daysAmountInp.addEventListener('input', (e) => {
        daysAmount = e.data;
        overallCalc(peopleAmount, daysAmount, coefficient);
    });
    baseLocation.addEventListener('change', (e) => {
        let optionIndex = e.target.selectedIndex;
        let selectedOption = baseLocation.options[optionIndex];
        if(selectedOption) {
            coefficient = selectedOption.value;
        }
        overallCalc(peopleAmount, daysAmount, coefficient);
    });

    function overallCalc (a, b, c) {
        let total = b*500*c*a;
        totalPayment.textContent = total;
    }
*/
    //Calc SAMMY END

    //Calc



    //Calc END

    // EXECUTABLES

    
    //Calling Slider function
    sliderCarousel(0);

    //Calling Timer Function
    timerElements('timer', '2020-04-19');

    // Calling Tabs function
    tabs('info-header-tab', 'info-header', 'info-tabcontent');

    // Calling Scroll up function
    scrollUp('block');













    //TESTS
    // console.log(this);
    
});