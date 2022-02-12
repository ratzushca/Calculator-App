const screen = document.getElementById("calculator");
const buttons = Array.from(document.querySelectorAll('.numbers'));


let operator ="";
let firstOperand = "";
let secondOperand = "";

buttons.forEach((buttonNr) =>
buttonNr.addEventListener('click',typeNumbers)
);

function handleOperation(value){
  switch(e.target.textContent){
    case "+":
      operator=value;
      screen.innerText = 0;
      break;
      case "=":
      calculate();
  }
}

function typeNumbers(e){
    let numberSelection = e.target.textContent;
    switch(e.target.innerText){
        case 'C':
             screen.value="";
             break;
        case isNaN:
          numberSelection="";
          break;
        default:
    firstOperand = numberSelection;
    screen.value+=(firstOperand);
    }
}




function calculate() {
    switch(operator){
      case "+":
        screen.value = parseInt(firstOperand)+parseInt(secondOperand);
        break;
    }
    operator=null;
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

  
    

 


