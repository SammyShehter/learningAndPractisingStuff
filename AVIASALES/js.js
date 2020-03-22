// Элементы на странице
const formSearch = document.querySelector(".form-search") ,
    inputCitiesFrom = formSearch.querySelector(".input__cities-from") ,
    dropdownCitiesFrom = formSearch.querySelector(".dropdown__cities-from") ,
    inputCitiesTo = formSearch.querySelector(".input__cities-to") ,
    dropdownCitiesTo = formSearch.querySelector(".dropdown__cities-to") ,
    inputDataDepart = formSearch.querySelector(".input__date-depart");

let city = [];


const citiesApi = 'dataBase/cities.json',
    //citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json',
    proxy = 'https://cors-anywhere.herokuapp.com/',
    API_KEY = '4c5b03533ae89342a8094e935e66608a',
    CALENDAR = 'http://min-prices.aviasales.ru/calendar_preload';


// Функции

const getData = (url, callback) => {
    const request = new XMLHttpRequest();

    request.open("GET", url);

    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) return;

        if(request.status === 200){
            callback(request.response);
        } else {
            console.error(request.status);
        }
    })

    request.send();
};


const showCity = (input, list) => {
    list.textContent = "";

    if(input.value === "") return;

    const filterCity = city.filter((item) => {
        const fixItem = item.name.toLowerCase();
        return fixItem.includes(input.value.toLowerCase());
    });

    filterCity.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add('dropdown__city');
        li.textContent = item.name;
        list.append(li);
    });

};

const renderCheapDay = (cheapTicket) => {
    console.log(cheapTicket);
};


const renderCheapYear = (cheapTickets) => {
    cheapTickets.sort( (a,b) => {
        if(a.value > b.value){
            return 1;
        }
        if(a.value < b.value){
            return -1;
        }
        return 0;
    });
    console.log(cheapTickets);
};


const renderCheap = (data, date) => {
    const cheapTicketYear = JSON.parse(data).best_prices;
    
    const cheapTicketDay = cheapTicketYear.filter((item) => {
        return item.depart_date === date;
    });
    
    renderCheapDay(cheapTicketDay);
    renderCheapYear(cheapTicketYear);
};

//типизировал функцию по шаблону Макса 

const addCity = (event, item, list) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li'){
        item.value =  target.textContent;
        list.textContent = "";
        //прикрутил небольшой цикл который удаляет выбранный город, чтобы он не высвечивался
        // for(let i = 0; i < city.length; i++ ){
        //     if(city[i] == item.value){
        //         city.splice(i,1);
        //         i--;
        //     }
        // }
    }
};



//Обработчики событий

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

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const cityFrom = city.find((item) => inputCitiesFrom.value === item.name);
    const cityTo = city.find((item) => inputCitiesTo.value === item.name)

    const formData = {
        from: cityFrom.code,
        to: cityTo.code,
        when: inputDataDepart.value,
    };
    const requestData = `?depart_date=${formData.when}&origin=${formData.from}&destination=${formData.to}&one_way=true`;

    

        getData(CALENDAR + requestData, (response) => {
            renderCheap(response, formData.when);
        });
        
});


///////////////////////////////////////////////////////////////////


getData(citiesApi, (data) => {
    city = JSON.parse(data).filter(item => item.name);
    console.log(city);
});

