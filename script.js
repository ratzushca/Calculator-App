const screen = document.getElementById("calculator");
const buttons = Array.from(document.querySelectorAll('.numbers'));

let memory = "";
let operator ="";
let firstOperand = "";
let secondOperand = "";

buttons.forEach((buttonNr) =>
buttonNr.addEventListener('click',typeNumbers)
);



function handleOperation(value){
  switch(e.target.textContent){
    case (e.target.textContent==="+"):
      operator=value;
      memory=firstOperand;
      screen.value = 0;
      break;
      case "=":
      calculate();
  }
}

function typeNumbers(e){
    let numberSelection = e.target.textContent;
    switch(isNaN(e.target.innerText)||parseInt(e.target.innerText)){
        case (e.target.textContent==="C"):
          firstOperand="";
             screen.value="";
             break;
        case (isNaN(e.target.innerText)):
          operator=numberSelection;
          screen.value=screen.value;
          break;
        default:
    firstOperand = numberSelection;
    screen.value+=(firstOperand);
    }
  
}

function calculate() {
  if (operator === null) {
    return;
  } else {
    switch (operator) {
      case "+":
        screen.innerText = parseInt(firstOperand) + parseInt(secondOperand);
        break;
      case "-":
        screen.innerText = parseInt(firstOperand) - parseInt(secondOperand);
        break;
      case "*":
        screen.innerText = parseInt(firstOperand) * parseInt(secondOperand);
        break;
      case "/":
        screen.innerText = parseInt(firstOperand) / parseInt(secondOperand);
        break;
    }

    firstOperand = screen.innerText;
    operator = null;
  }

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

  
    

 


