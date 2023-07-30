//start with creating 16 divs that fill #screen (500x500px)
const screen=document.querySelector('#screen');
let startingGrid=16;

const box= document.querySelector('.box');
let squareWidth=0;

const resetButton=document.querySelector("#resetButton");

function createSketchBoxes(){
    squareWidth=(500/Math.sqrt(startingGrid));
    for (let i=0;i<startingGrid; i++){
        //create div 
        const square=document.createElement('div');
        //add id box01 to boxi (whatever gridnumber is)
        square.id="box"+i+1;
        //create box dimensions (height & width should be ==)
        square.style.width=squareWidth +"px";
        square.style.height=squareWidth+'px';
        //add class box to it
        square.setAttribute('class','box');
        //add div 'square' to div 'screen'
        screen.appendChild(square);
        //add event listener that changes background color to black for mouseover
        square.onmouseover=()=>{
            square.style.backgroundColor='black';
            //square.style.border='1px solid green';
        }       
    }
}
createSketchBoxes();
resetButton.onclick=()=>{
    i=0
    while (screen.firstChild){
        screen.removeChild(screen.firstChild);
    }
    startingGrid=Math.pow(parseInt(window.prompt('Enter size of Sketch. 1 is biggest sketch size 100 is the smallest')), 2);
    createSketchBoxes();
}
//add event listener to reset background color and create prompt




//in prompt ask for size of sketch from 1-100
//check prompt input to make sure it falls in parameters
//from prompt number determine # of divs by squaring the prompted number (ie 6=36 divs)

//update box style width and height to 500/prompt#


