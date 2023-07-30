//start with creating 16 divs that fill #screen (500x500px)
const screen=document.querySelector('#screen');
let startingGrid=16;

const box= document.querySelector('.box');
let squareWidth=(500/Math.sqrt(startingGrid)-2);

for (let i=0;i<startingGrid; i++){
    const square=document.createElement('div');
    square.id="box"+i+1;
    square.style.width=squareWidth +"px";
    square.style.height=squareWidth+'px';
    square.setAttribute('class','box');
    screen.appendChild(square);
    //add event listener that changes background color to black for mouseover
    square.onmouseover=()=>{
        square.style.backgroundColor='black';
        square.style.border='1px solid green';
    }
}




//add event listener to reset background color and create prompt
//in prompt ask for size of sketch from 1-10 
//check prompt input to make sure it falls in parameters
//from prompt number determine # of divs by squaring the prompted number (ie 6=36 divs)
//and create and add div to screen parent and add class box to it
//update box style width and height to 500/prompt#


