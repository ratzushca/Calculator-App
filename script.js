
const screen = document.querySelector("#calculator");
const numbers = document.querySelectorAll("input.values");
const operations = document.querySelectorAll("input.values");

const text = document.getElementById('calculator');
const button = document.getElementById('buttonC');

let memory = "";
let operator = "";
let previousNumber;

//  clear screen when pressing C
button.onclick = function() {
    text.value = '';
}



function inputVal(value){
    if (isNaN(value)){
        simbolVal(value);
    }else{
        numberVal(value);
    }
}



// // display numbers on input
// for (i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", function(event) {
//       screen.value = screen.value + event.currentTarget.value;
//       console.log(screen.value)
//     })
//   }

  function calculate(){
      if (operator === null){
          return;
      } else{
          switch (operator){
              case "+":
              screen.innerText = pareseInt(previousNumber) + pareseInt(memory);
          }
          memory=screen.innerText;
          operator=null;

      }
  }

  function simbolVal(value){
    console.log("Symbol");
    switch(value){
        case "+":
            operator=value;
            previousNumber = memory;
            memory = " ";
            screen.innerText = 0;
            break;
        case "=":
            calculate();
    }

}

function numberVal(value) {
    if (memory === 0) {
      memory = value;
    } else {
      memory = memory + value.toString();
    }
    updateScreen();
  }


function inputValue(){
    document.querySelector("#calculator").addEventListener('click',function(e){
        inputVal(e.target.innerText);
    });
}
inputValue();

