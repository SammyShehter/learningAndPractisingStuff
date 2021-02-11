/* Prefered HTML for this script - 

    <div class="timer-numbers" id="timer">
        <span class="days"></span><br>
        <span class="hours"></span>
        <span>:</span>
        <span class="minutes"></span>
        <span>:</span>
        <span class="seconds"></span>
    </div>

*/


//Timer function
const getDateDifference = (deadline) => {
    let t = (Date.parse(deadline) - Date.parse(new Date())) / 1000, // Gets difference between deadline and User's time in seconds
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

    // Catching elements from document
    let timer = document.querySelector(`#${id}`),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        devider = timer.querySelector('br');

    // Setting timer function in interval of 1 second
    let setTimer = setInterval(updateClock, 1000);

    // Timer function itself
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
        }
    }
}

// Calling Timer function
timerElements('timer', '2025-04-10');
/* For the first argument - set your 
timer wrapper name and second argument - the date you wish to see 
 as a deadline date. Date format YYYY-MM-DD 
 
 0.4 seconds execution
 */