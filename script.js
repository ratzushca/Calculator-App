const screen = document.getElementById("calculator");
const buttons = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const deleteBtn = document.querySelector('#buttonC');
const calculateBtn = document.querySelector('.calculate');
const decimalBtn = document.querySelector('.decimal-point');

let operator ="";
let firstOperand = "";
let secondOperand = "";

buttons.forEach((buttonNr) =>
buttonNr.addEventListener('click',typeNumbers)
);


operators.forEach((opBtn) =>
opBtn.addEventListener('click',oprationType)
);



deleteBtn.addEventListener('click', ()=>{
screen.value = "";
operator ="";
firstOperand = "";
secondOperand = "";
})

calculateBtn.addEventListener('click', (e)=>{
 if(e.target.textContent === "="){
  calculate()
 }
})

// decimalBtn.addEventListener('click', (e)=>{
//   if(e.target.textContent === "."){
//    calculateDecimal()
//   }
//  })



function typeNumbers(e){
    let numberSelection = e.target.textContent;
    if (!operator){
      firstOperand += numberSelection;
      screen.value=firstOperand
  
    }else {
    secondOperand += numberSelection;
    screen.value=secondOperand;
    }
}

function oprationType(e){
  let chooseOperator = e.target.textContent;
  if(firstOperand&&secondOperand){
    calculate();
  }else{
  operator=chooseOperator;
  screen.value= screen.value;
}
}

function deleteEvent(){
  screen.value="";
  operator ="";
  firstOperand = "";
  secondOperand = "";

}

function calculate() {
 
    switch (operator) {
      case "+":
        screen.value = parseInt(firstOperand) + parseInt(secondOperand);
        break;
      case "-":
        screen.value = parseInt(firstOperand) - parseInt(secondOperand);
        break;
      case "x":
        screen.value = (parseFloat(firstOperand) * parseFloat(secondOperand));
        // .toLocaleString()
        break;
      case "÷":
        screen.value = Number(parseFloat(firstOperand/secondOperand).toFixed(3));
        break;
    }

    firstOperand = screen.value;
    secondOperand = "";
    
  }














  
    

 


