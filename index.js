const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


const questione1 = document.getElementById("question");
const inpute1 = document.getElementById("input");

const forme1= document.getElementById("form");

const scoree1 = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoree1.innerText = `Score: ${score}` ;


questione1.innerText = `What is ${num1} multiply by ${num2}?`;

const correctans = num1 * num2;

forme1 = addEventListener("submit", ()=>{
      const userans = +inpute1.value;
      if(userans === correctans) {
        score++ ;
        updateLocalStorage();
      }else{
        score--
        updateLocalStorage();
      }

      
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

