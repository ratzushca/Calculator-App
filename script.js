
const screen = document.querySelector("#calculator");
// let numbers = document.querySelectorAll(".numbers");
// let operations = document.querySelectorAll("input.values");

// let text = document.getElementById('calculator');

// let button = document.getElementById('buttonC');
// //  clear screen when pressing C
// button.onclick = function() {
//     text.value = '';
// }


let memory = "";
let operator = "";
let previousNumber;



function inputVal(value){
    if (isNaN(value)){
        opVal(value);
    }else{
        numberVal(value);
    }
}



// // // display numbers on input
// // for (i = 0; i < numbers.length; i++) {
// //     numbers[i].addEventListener("click", function(event) {
// //       screen.value = screen.value + event.currentTarget.value;
      
// //     })
// //   }

  function calculate(){
      if (operator === null){
          return;
      } else{
          switch (operator){
              case "+":
              screen.innerText = parseInt(previousNumber) + parseInt(memory);
              break;
              case "-":
              screen.innerText = parseInt(previousNumber) + parseInt(memory);
              break;
          }
          memory= screen.innerText;
          
          operator=null;

      }
  }


  function numberVal(value) {
    console.log(value)

    if (typeof memory === "number") {
      memory = value;
    } else {
      memory = memory + value.toString();
      console.log(memory)
    }
    updateScreen();
  }



  function opVal(value){
    console.log(value);
    switch(value){
        case "+":
            operator=value;
            previousNumber = memory;
            memory = "";
            screen.innerText = 0;
            break;
        case "=":
            calculate();
    }

}


  function updateScreen(){
      screen.innerText = memory;
  }

function input(){
    document.querySelector(".elements").addEventListener('click',function(e){
        inputVal(e.target.innerText);
        
    });
}
input();


