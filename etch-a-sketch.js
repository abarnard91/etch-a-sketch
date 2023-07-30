//start with creating 16 divs that fill #screen (500x500px)
const screen=document.querySelector('#screen');
let startingGrid=16;

const box= document.querySelector('.box');
let squareWidth=0;

const resetButton=document.querySelector("#resetButton");
const colorButton=document.querySelector('#colorButton');
let colorOn=1;

//randomnumber generator function to create random colors for box when
//colorOn varaible is even 
function randomNumber(number){
    return Math.floor(Math.random()* (number+1));
}


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
        //if colorOn variable is even
        if (colorOn%2===0){
            square.onmouseover=()=>{
                //creates random color back ground color for square div
                const randomColor= `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
                square.style.backgroundColor=randomColor;
            }
        }
        else{
            //if colorOn is odd creates black background color of square div on mouseover event
            square.onmouseover=()=>{
                square.style.backgroundColor='black';
            } 
        }             
    }
}   
createSketchBoxes();
//add event listener to reset background color and create prompt
resetButton.onclick=()=>{
    i=0
    while (screen.firstChild){
        screen.removeChild(screen.firstChild);
    }
    //in prompt ask for size of sketch from 1-100
    startingGrid=Math.pow(parseInt(window.prompt('Enter size of Sketch. 1 is biggest sketch size 100 is the smallest')), 2);
    console.log(startingGrid)
    //check prompt input to make sure it falls in parameters
    if (startingGrid%1!=0){
        alert(`${startingGrid}NOT A NUMBER!!!!!!!`);
        startingGrid=Math.pow(parseInt(window.prompt('Enter a number. 1 is biggest sketch size 100 is the smallest')), 2);
    }
    if( Math.sqrt(startingGrid)>125){
        startingGrid=Math.pow(parseInt(window.prompt('Your number is too big. 1 is biggest sketch size 100 is the smallest')), 2);
    }
    else{
        alert("Draw to your heart's content");
    }
    createSketchBoxes();
}

colorButton.onclick=()=>{
    //clears screen 
    while (screen.firstChild){
        screen.removeChild(screen.firstChild);
    }
    //toggles 1 color or black or white
    colorOn+=1;
    //lets user know if they are turning on the color mode or not
    if (colorOn%2===0){
        alert("Let the color flow!!!!!!!")
    }
    else{
        alert("Classic Black and White"); 
    }
    createSketchBoxes();
}
    






