const divone = document.getElementById("divone");
const one = document.getElementById("one");

  
  function showDiv1() {
      divone.style.display = "block";
      one.setAttribute("onClick", "toggleDiv()");
  }
  
  function toggleDiv() {
      divone.style.display = "none";
      one.setAttribute("onClick", "showDiv1()");
  }

  /* easier way
  function showDiv1() {
    if (divone.style.display === "block") {
        divone.style.display = "none";
    } else {
        divone.style.display = "block";
    }
}*/




  const two = document.getElementById("two");
  const divtwo = document.getElementById("divtwo");


  function showTwo()  {
    divtwo.style.display = "block";
  }


  two.addEventListener("click", showTwo);
  document.addEventListener("DOMContentLoaded", showTwo);






    const closeMenus = document.getElementsByClassName("closemenu");
    for (let i = 0; i < closeMenus.length; i++) {
        closeMenus[i].addEventListener("click", function() {
            this.style.backgroundColor = "blue";
            this.parentElement.style.display = "none";
            
        });
    }