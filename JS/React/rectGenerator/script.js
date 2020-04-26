'use strict';

let btnRand = document.querySelector('#rectRandCreator'),
    btnCust = document.querySelector('#rectCreator'),
    inputHeight = document.querySelector('#rectHeight'),
    inputWidth = document.querySelector('#rectWidth'),
    pool = document.querySelector('.rectPool'),
    colors = ['red', 'purple', 'black', 'orange', 'burlywood', 'chartreuse', 'darkgreen', 'blue', 'gold', 'gray', 'yellow', 'maroon', 'yellowgreen'];

  


class RandomRectangle {
    constructor(arr) {
        this.height = Math.floor(Math.random() * 70) + 25;
        this.width = Math.floor(Math.random() * 70) + 25;
        this.randNumb = Math.floor(Math.random() * arr.length)
        this.background = arr[this.randNumb];

    }

    drawRect() {
        let elem = document.createElement('div');
        let param = `height: ${this.height}px; width: ${this.width}px; background: ${this.background};`;
        pool.appendChild(elem);
        elem.style.cssText = param;
    }

}

class Rectangle {
    constructor(height = 50, width = 50, background = 'red') {
        this.height = height;
        this.width = width;
        this.background = background;
    }

    drawRect() {
        let elem = document.createElement('div');
        let param = `height: ${this.height}px; width: ${this.width}px; background: ${this.background};`;
        pool.appendChild(elem);
        elem.style.cssText = param;
    }
}

btnRand.addEventListener('click', () => {
    let kek = new RandomRectangle(colors);
    kek.drawRect();
});


var height;
var width;  

inputHeight.addEventListener('input', (e) => {
    var height = e.target.value;
    window.height = height;
});

inputWidth.addEventListener('input', (e) => {
    var width = e.target.value;
    window.width = width;
});

btnCust.addEventListener('click', () => {
    let kek = new Rectangle(height, width);
    kek.drawRect();
});