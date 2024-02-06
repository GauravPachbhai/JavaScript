const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
const text =  document.querySelector('.text');

button.forEach(function(button){
    button.addEventListener('click',(e)=>{
        text.style.color = "black"
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            text.innerHTML = `You Have Clicked ${e.target.id} box`;
            console.log()
        }
        if(e.target.id === 'green'){
         body.style.backgroundColor =e.target.id;
         text.innerHTML = `You Have Clicked ${e.target.id} box`;
        }
        if(e.target.id === 'black'){
           body.style.backgroundColor = e.target.id;
           text.style.color = "white"
           text.innerHTML = `You Have Clicked ${e.target.id} box`;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            text.innerHTML = `You Have Clicked ${e.target.id} box`;
        }
    })
})