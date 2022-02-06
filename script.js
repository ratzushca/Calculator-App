
const screen = document.querySelector("#calculator");
const numbers = document.querySelectorAll("input.valuesL");
const operations = document.querySelectorAll("input.valuesR");

const text = document.getElementById('calculator');
const button = document.getElementById('buttonC');

//  clear screen when pressing C
button.onclick = function() {
    text.value = '';
}

// display numbers on input
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(event) {
      screen.value = parseInt(screen.value + event.currentTarget.value)
      console.log(screen.value)
    })
  }












function showresult(choice){
   var totalR = document.getElementById("calculator").value;
   var result;
   var c = choice;

   switch (c){
       case "sum":
           result = totalR + choice.currentTarget.value;
           break
   }
   document.getElementById("calculator").value= result;
}

