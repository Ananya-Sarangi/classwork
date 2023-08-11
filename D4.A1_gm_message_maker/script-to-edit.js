// Your JavaScript goes here

function choiceImage(){
    let choice = document.getElementById("dropdown").value;
    let imageChoice = document.getElementById("imageDisplay");
    imageChoice.src = choice;
}

function myInput1() {
    let inputValue1 = document.getElementById("toptext").value;
    document.getElementById("text-1").innerHTML = inputValue1;
}

function myInput2() {
    let inputValue2 = document.getElementById("bottomtext").value;
    document.getElementById("text-2").innerHTML = inputValue2;
}

function changeFont(fontFamily) {
    const paragraph1 = document.getElementById("text-1");
    const paragraph2 = document.getElementById("text-2");
    paragraph1.style.fontFamily = fontFamily;
    paragraph2.style.fontFamily = fontFamily;
}


function changeSize1() {
    var change1 = document.getElementById("sizeSlider1");
    var newSize1 = change1.value + '%';
  
    var text1 = document.getElementById("text-1");
    
  
    text1.style.fontSize = newSize1;
   
  }

  function changeSize2() {
    var change2 = document.getElementById("sizeSlider2");
    var newSize2 = change2.value + '%';
  
    var text2 = document.getElementById("text-2");
  
    
    text2.style.fontSize = newSize2;
  }


function changeWeight() {
    const weightValue = document.getElementById("weight").value;
    document.getElementById("text-1").style.webkitTextStrokeWidth = weightValue + "px";
    document.getElementById("text-2").style.webkitTextStrokeWidth = weightValue + "px";
  }

function chooseColor() {
    var selectElement = document.getElementById("colorchange");
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    var selectedColor = selectElement.value;

    text1.style.color = selectedColor;
    text2.style.color = selectedColor;
}




