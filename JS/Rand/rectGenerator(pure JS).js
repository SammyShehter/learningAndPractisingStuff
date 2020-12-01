'use strict';

let btnRand = document.querySelector('#rectRandCreator'),
    btnCust = document.querySelector('#rectCreator'),
    inputHeight = document.querySelector('#rectHeight'),
    inputWidth = document.querySelector('#rectWidth'),
    pool = document.querySelector('.rectPool'),
    colorSelect = document.querySelector('#colors'),
    colors = ['red', 'purple', 'black', 'orange', 'burlywood', 'chartreuse', 'darkgreen', 'blue', 'gold', 'gray', 'yellow', 'maroon', 'yellowgreen'];


for (let i = 0; i < colors.length; i++){
  let opt = document.createElement('option');
  opt.value = colors[i];
  opt.textContent = colors[i];
  colorSelect.appendChild(opt);
}
  


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

let height;
let width;  
let selectedColor;

inputHeight.addEventListener('input', (e) => {
    height = e.target.value;
});

inputWidth.addEventListener('input', (e) => {
    width = e.target.value;
});

colorSelect.addEventListener('change', (event) => {
    selectedColor = event.target.value;
});

btnCust.addEventListener('click', () => {
    let kek = new Rectangle(height, width, selectedColor);
    kek.drawRect();
});