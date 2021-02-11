export default tabs;

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

/*
Put tab's class name instead of 'info-header-tab'
Put tab's wrapper class name instead of 'info-header'
Put tab's content class name instead 'info-tabcontent'
*/

//tabs('info-header-tab', 'info-header', 'info-tabcontent');