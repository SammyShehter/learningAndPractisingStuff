'use strict';

let btn = document.querySelector('#rectCreator'),
    pool = document.querySelector('.rectPool'),
    colors = ['red', 'purple', 'black', 'orange', 'burlywood', 'chartreuse', 'darkgreen', 'blue', 'gold', 'gray', 'yellow', 'maroon', 'yellowgreen'];

class Rectangle {
    constructor(arr) {
        this.height = Math.floor(Math.random()*70);
        this.width = Math.floor(Math.random()*70);
        this.randNumb = Math.floor(Math.random()*arr.length)
        this.background = arr[this.randNumb];

    }
    drawRect() {
        let elem = document.createElement('div');
        let param = `height: ${this.height}px; width: ${this.width}px; background: ${this.background};`;
        pool.appendChild(elem);
        elem.style.cssText = param;
    }

}

btn.addEventListener('click', () => {
    let kek = new Rectangle(colors);
    kek.drawRect();
});
