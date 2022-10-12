/*Generate a  random number using random() */

let number1 = Math.random()*10;
number1 = Math.floor(number1)+1;

let number2 = Math.random()*10;
number2 = Math.floor(number2)+1;
let formElement = document.getElementById("form");

/* Select the questionElement by using getElementById() */
let questioElement = document.getElementById("question").innerHTML="What is " + number1 + " x " + number2 +"?"

/* Calculate the correct answer to compare the answer submitted by user */ 
let correctAnswer = number1 * number2 ;

/* Get user input */
let inputElement = document.getElementById("input");

/* Select Score element */

let score = document.getElementById("score");

let reset = document.getElementById("reset");

let marks1 = JSON.parse(localStorage.getItem("Marks"));

if(!marks1){
    marks1=0;
}
 
score.innerHTML ="Score : " + marks1;
/*Add event listener to submit button*/

formElement.addEventListener("submit",submitFunction);

function submitFunction(){
    let userAnswer = +inputElement.value;
   

    if( userAnswer === correctAnswer){  

        marks1++ ;
        updateLocalStorage();
    }else{
       marks1-- ; 
        updateLocalStorage();
    }
}

function updateLocalStorage(){
    localStorage.setItem("Marks",JSON.stringify(marks1));
}



reset.addEventListener("click",resetFunction);

 function resetFunction(){
    localStorage.clear();
    marks1 = 0;
    score.innerHTML ="Score : " + marks1;
 }





