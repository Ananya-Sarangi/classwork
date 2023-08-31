function myInput() {
    let inputValue = document.getElementById("inputbox").value;
    document.getElementById("heading").textContent = inputValue;
}


function toggleVisibility() {
    const paragraph = document.getElementById("subheading");
    if (paragraph.style.visibility === "hidden") {
      paragraph.style.visibility = "visible";
    }
    else {
      paragraph.style.visibility = "hidden";
    }
  }

  function changeFont(fontFamily) {
    const paragraph = document.getElementById("paragraph");
    paragraph.style.fontFamily = fontFamily;
  }

  function changeWidth() {
    const adjustableDiv = document.getElementById('adjustableDiv');
    const widthSlider = document.getElementById('widthSlider');
    const newWidth = widthSlider.value + '%';
    adjustableDiv.style.width = newWidth;
  }

  function chooseImage() {
    const selectedImage = document.getElementById("imageSelect").value;
    const mainImage = document.getElementById("main");
    mainImage.src = selectedImage;
  }
  function myInput1() {
    let inputValue1 = document.getElementById("toptext").value;
    document.getElementById("text-1").textContent = inputValue1;
}
