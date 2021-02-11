
//Carousel

//Carousel elements from page
const posts = document.querySelectorAll('.post');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

//Array of shown posts
const activeArr = []; 
for(let i = 0; i < posts.length; i++){
    activeArr.push(i);
}

//Carousel event listeners
left.addEventListener('click', () => {
    const minus = activeArr.shift();
    activeArr.push(minus);
    slider(activeArr);
});

right.addEventListener('click', () => {
    const plus = activeArr.pop();
    activeArr.unshift(plus);
    slider(activeArr);
});

//Carousel main function
function slider(arr){

    posts.forEach((item) => {
        item.style.display = 'none';
    });


    for(let i = 0; i < 3; i++){
        posts[arr[i]].style.display = 'flex';
        posts[arr[i]].style.order = i;
    }

}
//Carousel Call
slider(activeArr);

//Carousel END