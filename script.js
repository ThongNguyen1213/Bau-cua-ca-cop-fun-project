
let sqr1 = document.getElementById('first-result');
let sqr2 = document.getElementById('second-result');
let sqr3 = document.getElementById('third-result');
let button = document.getElementById('press');

var arr = ["images/bau.jpg","images/ca.jpg","/images/cua.jpg","/images/ga.jpg","/images/nai.jpg","/images/tom.jpg"];

//Generate random picture
function fortuneSelector() {
    let randomNum1 = Math.floor(Math.random()*arr.length);
    let randomNum2 = Math.floor(Math.random()*arr.length);
    let randomNum3 = Math.floor(Math.random()*arr.length);
    sqr1.setAttribute("src", arr[randomNum1]);
    sqr2.setAttribute("src", arr[randomNum2]);
    sqr3.setAttribute("src", arr[randomNum3]);
}

let changeText;
function generateRandom() {
    changeText = setInterval(fortuneSelector, 10);
}
function generateEnd(){
    clearInterval(changeText);
}

button.addEventListener('mousedown', generateRandom);
button.addEventListener('mouseup', generateEnd);