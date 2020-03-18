const formSearch = document.querySelector(".form-search") ,
    inputCitiesFrom = formSearch.querySelector(".input__cities-from") ,
    dropdownCitiesFrom = formSearch.querySelector(".dropdown__cities-from") ,
    inputCitiesTo = formSearch.querySelector(".input__cities-to") ,
    dropdownCitiesTo = formSearch.querySelector(".dropdown__cities-to") ,
    inputDataDepart = formSearch.querySelector(".input__date-depart");

const city = ['​Киев','​Краснодар','​Северодонецк','​Ашкелон','​Хмельницкий','​Тула',
    'Мариуполь','​Брест','Ростов-на-Дону','​Запорожье','​Борислав','​Пенза','​Харьков',
    '​Таганрог','​Пермь','​Самара','​Черновцы','Москва','Львов'];

const showCity = (input, list) => {
    list.textContent = "";

    if(input.value === "") return;

    const filterCity = city.filter((item) => {
        const fixItem = item.toLowerCase();
        return fixItem.includes(input.value.toLowerCase());
    });

    filterCity.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add('dropdown__city');
        li.textContent = item;
        list.append(li);
    });

}

//типизировал функцию по шаблону Макса
const addCity = (event, item, list) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li'){
        item.value =  target.textContent;
        list.textContent = "";
        //прикрутил небольшой цикл который удаляет выбранный город, чтобы он не высвечивался
        for(let i = 0; i < city.length; i++ ){
            if(city[i] == item.value){
                city.splice(i,1);
                i--;
            }
        }
    }
}

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});


dropdownCitiesFrom.addEventListener("click", (event) => {
    addCity(event, inputCitiesFrom, dropdownCitiesFrom);
});


inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesTo.addEventListener("click", (event) => {
    addCity(event, inputCitiesTo, dropdownCitiesTo);
});