const screen = document.getElementById("calculator");
const buttons = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const deleteBtn = document.querySelector('#buttonC');
const calculateBtn = document.querySelector('.calculate');

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


// function handleOperation(value){
//   switch(e.target.textContent){
//     case (e.target.textContent==="+"):
//       operator=value;
//       memory=firstOperand;
//       screen.value = 0;
//       break;
//       case "=":
//       calculate();
//   }
// }

function typeNumbers(e){
    let numberSelection = e.target.textContent;
    if (!operator){
      firstOperand = numberSelection;
      screen.value+=firstOperand;
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
  operator=chooseOperator
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
      case "*":
        screen.value = parseInt(firstOperand) * parseInt(secondOperand);
        break;
      case "/":
        screen.value = parseInt(firstOperand) / parseInt(secondOperand);
        break;
    }

    firstOperand = screen.value;
    operator = null;
  }














// function inputVal(value) {
//     if (isNaN(value)) {
//         operandVal(value);
//     }else{
//         numberVal(value);
//     }
// }

// function operandVal(value){
//     console.log(value);
//     switch(value){
//         case "+":
//         case "-":
//             operator = value;
//             previousNumber = memory;
//             memory = "";
//             screen.innerText = previousNumber;
//             break;
//         case "=":
//             calculate();
//     }
// }


// function numberVal(value) {
//     if (typeof memory === "number") {
//       memory = value;
//     } else {
//       memory = memory + value.toString();
//       console.log(memory)
//     }
//     updateScreen();
//   }


// function updateScreen(){
//       screen.innerText = memory;
//   }



//   function calculate(){
//       if (operator === null){
//           return;
//       } else{
//           switch (operator){
//               case "+":
//               screen.innerText = parseInt(previousNumber) + parseInt(memory);
//               break;
//               case "-":
//               screen.innerText = parseInt(previousNumber) - parseInt(memory);
//               break;
//           }
//           memory= screen.innerText;
//           console.log(memory);
//           operator = null;

//       }
//   }

  
    

 


