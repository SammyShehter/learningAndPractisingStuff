'use strict';

const inputNis = document.getElementById('nis');
const inputUsd = document.getElementById('usd');


inputNis.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', "course/course.json");
    request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () =>  {
        let p = new Promise( (resolve, reject) => {
            if(request.readyState === 4 && request.status === 200){
                resolve(); 
           } else {
               reject();
        }        
        });

        p
            .then(() => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputNis.value / data.usd;
            })
            .catch(() => {
                inputUsd.value = 'Something is wrong!';
            });
         
    });
});