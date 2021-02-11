export default scrollUp;

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

//  scrollUp('block');
//  Put here scroll up button's class instead of 'block'