function toggleVisibility() {
    const paragraph = document.getElementById("box");
    if (paragraph.style.visibility === "hidden") {
      paragraph.style.visibility = "visible";
    }
    else {
      paragraph.style.visibility = "hidden";
    }
  }
