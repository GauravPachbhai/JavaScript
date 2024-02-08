
const start = document.querySelector('#Start');
const Stop = document.querySelector('#Stop');

const randomColor = function () {
    const hex = '123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*16)];
        
    }
    return color;
}
let intervelID
const startChangingColor = function(){
    console.log("Clicked")
    if(!intervelID){
        intervelID = setInterval(changeBgColor,800);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function (){
    clearInterval(intervelID);
    intervelID = null;
}

start.addEventListener('click',startChangingColor);
Stop.addEventListener('click',stopChangingColor);