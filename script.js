
const screen = document.getElementById("calculator");

let memory = "";
let operator = "";

let previousNumber;

function inputVal(value) {
    if (isNaN(value)) {
        operandVal(value);
    }else{
        numberVal(value);
    }
}


function operandVal(value){
    console.log(value);
    switch(value){
        case "+":
        case "-":
            operator = value;
            previousNumber = memory;
            memory = "";
            screen.innerText = previousNumber;
            break;
        case "=":
            calculate();
    }
}


function numberVal(value) {
    if (typeof memory === "number") {
      memory = value;
    } else {
      memory = memory + value.toString();
      console.log(memory)
    }
    updateScreen();
  }

function updateScreen(){
      screen.innerText = memory;
  }


  function calculate(){
      if (operator === null){
          return;
      } else{
          switch (operator){
              case "+":
              screen.innerText = parseInt(previousNumber) + parseInt(memory);
              break;
              case "-":
              screen.innerText = parseInt(previousNumber) - parseInt(memory);
              break;
          }
          memory= screen.innerText;
          console.log(memory);
          operator = null;

      }
  }


 function input(){
    document.querySelector(".elements").addEventListener("click",function (e) {
        inputVal(e.target.innerText);
        });
    }

    input();


