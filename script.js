
// document.getElementById("seven").addEventListener("click", (e)=>{
//     e.preventDefault();
//     myFunction(x);
// });

// function myFunction(x){
//     var x = document.getElementById("seven").value;
//     document.getElementById("calculator").innerHTML = x;
    
// }

const input = document.querySelector("#calculator");
const buttons = document.querySelectorAll("input.valuesL");

const text = document.getElementById('calculator');
const button = document.getElementById('buttonC');



const db = document.getElementById("calculator");
db.addEventListener('click',numere);


// display numbers on input
function numere(){
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      input.value = input.value + event.currentTarget.value

 

    })
  }
};
console.log(numere())

//  delete all when pressing C
  button.onclick = function() {
      text.value = '';
  }

//   get numbers
function getNumbers(){
    document.querySelector("#calculator").value;
}

// add 2 numbers

function addNumbers (){
    var numbers = getNumbers();


}