var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function autoCarousel() {
  plusSlides(1); 
}

// Start automatic carousel with an interval of 3 seconds (3000 milliseconds)
var interval = setInterval(autoCarousel, 3000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


let galleryItemsData = [
  {
    id: "a",
    previewimg: "images/avalhalli.jpg",
    subtitletop1: "Easy •",
    subtitletop2: "4.3",
    cardtitle: "Avalhalli forest trail",
    subtitlebot: "Length: 6.8km • Est. 2h 10m"
  },
  {
    id: "b",
    previewimg: "images/skandagiri.jpg",
    subtitletop1: "Moderate •",
    subtitletop2: "4.7",
    cardtitle: "Skandagiri Trek",
    subtitlebot: "Length: 8km • Est. 12h"
  },
  {
    id: "c",
    previewimg: "images/kudremukh-trek.jpg",
    subtitletop1: "Moderate •",
    subtitletop2: "4.6",
    cardtitle: "Kudremukh Trek, Chikmagalur",
    subtitlebot: "Length: 22km • Est. 2D 1N"
  },
  {
    id: "d",
    previewimg: "images/uttari.jpg",
    subtitletop1: "Difficult •",
    subtitletop2: "4.8",
    cardtitle: "Uttari Betta Trek",
    subtitlebot: "Length: 5km • Est. 7h"
  }
];

let gallery = document.getElementById("cardcarouselcont");

let generateGallery = () => {
    return (gallery.innerHTML = galleryItemsData.map((x) => {
        let {id, previewimg, subtitletop1, subtitletop2, subtitlebot} = x;
        return `
        <div class="card" id="${x.id}">
          <div class="cardimg">
            <img class="preview" src="${x.previewimg}">
          </div>
          <div class="card-content">
            <p class="card-subtitletop1">${x.subtitletop1}</p><span class="fa fa-star checked"></span> <p class="card-subtitletop2">${x.subtitletop2}</p>
            <p class="card-title">${x.cardtitle}</p>
            <p class="card-subtitlebot">${x.subtitlebot}</p>
          </div>
        
        </div>
    `
    })
    .join(""));
    
};

        


generateGallery();


var count = document.querySelectorAll(".count");
var arr = Array.from(count);

count.innerHTML = "";
var zero = 0;

arr.map((item) => {
  var val = item.innerHTML;

  function counter() {
    item.innerHTML = zero++;
    if (zero > val) {
      clearInterval(fun);
    }
  }

  let fun = setInterval(() => {
    counter();
  }, item.dataset.time / val);
});

