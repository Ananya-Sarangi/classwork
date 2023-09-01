let galleryItemsData = [
    {
        id: "a",
        image_singular: "images/image-removebg-preview (31).png",
        image_plural: "images/image-removebg-preview (32).png",
        title_singular: "PENCIL",
        title_plural: "PENCILS"
      },
      {
        id: "b",
        image_singular: "images/apple.png",
        image_plural: "images/apples.png",
        title_singular: "APPLE",
        title_plural: "APPLES"
      },
      {
        id: "c",
        image_singular: "images/butterfly.png",
        image_plural: "images/Butterflies.png",
        title_singular: "BUTTERFLY",
        title_plural: "BUTTERFLIES"
      },
      {
        id: "d",
        image_singular: "images/ball.png",
        image_plural: "images/balls.png",
        title_singular: "BALL",
        title_plural: "BALLS"
      },
      {
        id: "e",
        image_singular: "images/doll.png",
        image_plural: "images/dolls.png",
        title_singular: "DOLL",
        title_plural: "DOLLS"
      },
      {
        id: "f",
        image_singular: "images/balloon.png",
        image_plural: "images/balloons.png",
        title_singular: "BALLOON",
        title_plural: "BALLOONS"
      },
      {
        id: "g",
        image_singular: "images/ice-cream.png",
        image_plural: "images/ice-creams.png",
        title_singular: "ICE-CREAM",
        title_plural: "ICE-CREAMS"
      },
      {
        id: "h",
        image_singular: "images/book.png",
        image_plural: "images/books.png",
        title_singular: "BOOK",
        title_plural: "BOOKS"
      },
      {
        id: "i",
        image_singular: "images/clock.png",
        image_plural: "images/clocks.png",
        title_singular: "CLOCK",
        title_plural: "CLOCKS"
      },
      {
        id: "j",
        image_singular: "images/toy.png",
        image_plural: "images/toys.png",
        title_singular: "TOY",
        title_plural: "TOYS"
      }
   
];

let gallery = document.getElementById("mainarea");

let generateGallery = () => {
    return (gallery.innerHTML = galleryItemsData.map((x) => {
        let {id, image_singular, image_plural, title_singular, title_plural} = x;
        return `
        <div class="bigbox" id="${x.id}">
        <div class="imgbox">
            <div class="leftbox">
                <img class="leftimg" src="${x.image_singular}">
            </div>
            <div class="rightbox">
                <img class="rightimg" src="${x.image_plural}">
            </div>
        </div>
        <div class="bottombox">
            <div class="botright">${x.title_singular}</div>
            <div class="botleft">${x.title_plural}</div>
        </div>
        </div>
    `
    })
    .join(""));
    
};


generateGallery();



