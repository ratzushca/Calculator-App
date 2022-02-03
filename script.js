
document.getElementById("seven").addEventListener("click", (e)=>{
    e.preventDefault();
    myFunction();
});

function myFunction(){
    var x = document.getElementById("seven").value;
    document.getElementById("calculator").innerHTML = x;
    
}
