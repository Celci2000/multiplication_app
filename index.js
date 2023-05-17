const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const quesEl= document.getElementById("question");
const inputEl= document.getElementById("input");
const formEl= document.getElementById("form");


const scoreEl=document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")) || 0;
console.log(score);

// if (!score) {
//   score = 0;
// }

scoreEl.innerText=`score:${score}`;
quesEl.innerText=`What is ${num1} multiplied by ${num2}?`;
var correctans=num1*num2;

function updateScore(){

   let userans= inputEl.value;

    if(correctans==userans){
        score++;
        score.innerText=`score:${score}`;
        localStorage.setItem("score",JSON.stringify(score));
        console.log(score);
    }
    else{
        score--;
        score.innerText=`score:${score}`;
        localStorage.setItem("score",JSON.stringify(score));
        console.log(score);
    }
}





