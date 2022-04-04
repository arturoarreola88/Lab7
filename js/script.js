function init(){
//add your javascrip between these two lines of code
  function alertFunction(){
    var x1 = document.getElementById("entryinput").value;
    var x2 = document.getElementById("textoutput");
    alert("Arturo Arreola: "+ x1);
    x2.innerHTML = x1;
     }
     var x3 = document.getElementById('entrybutton');
     x3.addEventListener("click", alertFunction); 
    }
window.addEventListener('load', init);
