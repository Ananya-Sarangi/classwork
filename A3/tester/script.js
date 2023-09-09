//Slideshow Carousel js
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






// Initialize an empty array to store recipe data obtained from api
const recipesData = [];

// Function- creates html structure for recipe card
function createRecipeCard(recipe) {
    return `
    
    <div class="cardwrapper">
        <div class="imagewrapper"> 
             <img src="${recipe.image}" alt="${recipe.title}" width="400">
        </div>

        <div class="textwrapper"> 
            <div class="recipetitlewrapper"> 
                <p id="recipetitle">${recipe.title}</h1>
            </div>

            <div class="recipetimewrapper"> 
                <div class="icon-wrapper">
                    <img src="images/icons8-clock-50.png" alt="Clock Icon" class="clockicon">
                </div>
                <p>Ready in ${recipe.readyInMinutes} minutes</p>
            </div>

            <div class="recipeurlwrapper"> 
                <a href="recipepagetester.html?recipeUrl=${encodeURIComponent(recipe.sourceUrl)}" class="button" target="_blank">View Recipe</a>
            </div>
        
        </div>
    </div>
    `
 
    ;
}

// Function to display recipe cards 
function displayRecipes(recipes) {
    const outputDiv = document.getElementById("recipearea");
    outputDiv.innerHTML = ''; // Clear existing content

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        outputDiv.innerHTML += recipeCard;
    });
    scrollToResultSection();
}


// auto scroll to section with results
function scrollToResultSection() {
    const resultSection = document.getElementById("3");
    if (resultSection) {
        
        resultSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Function to fetch recipes from the API - Search by keyword
function getRecipesFromAPI(query) {
    $.ajax({
        url: `https://api.spoonacular.com/recipes/search?apiKey=075b51dbcd4d4419836f94c406a94c50&number=15&query=${query}`,  // change number - 10&query to change numbr of results
        success: function (res) {
            const recipes = res.results.map(result => ({
                title: result.title,
                image: `${res.baseUri}${result.image}`,
                readyInMinutes: result.readyInMinutes,
                sourceUrl: result.sourceUrl,
            }));

            // Populate the recipesData array with API results
            recipesData.length = 0; // Clear existing data
            recipesData.push(...recipes);

            // Call displayRecipes function - display the dynamically generated recipe cards
            displayRecipes(recipesData);
        }
    });
}

// Function to fetch recipes from the API - Search by cuisine
function getCuisinesFromAPI(query) {
    $.ajax({
        url: `https://api.spoonacular.com/recipes/search?apiKey=075b51dbcd4d4419836f94c406a94c50&number=15&query=${query}`,  // change number - 10&query to change numbr of results
        success: function (res) {
            const recipes = res.results.map(result => ({
                title: result.title,
                image: `${res.baseUri}${result.image}`,
                readyInMinutes: result.readyInMinutes,
                sourceUrl: result.sourceUrl,
            }));

            // Populate the recipesData array with API results
            recipesData.length = 0; // Clear existing data
            recipesData.push(...recipes);

            // Display the dynamically generated recipe cards
            displayRecipes(recipesData);
        }
    });
}

// Event listener for the searchbox 

document.getElementById("search").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const query = document.getElementById("search").value;
    getRecipesFromAPI(query);

    }
  
});




// Add a click event listener to all card elements with the "cardwrapper" class
$(".cardwrapper").click(function() {
    // Get the recipe URL from the data attribute
    const recipeUrl = $(this).data("recipe-url");

    // Redirect to the recipe page
    window.location.href = `recipepagetester.html?sourceUrl=${encodeURIComponent(sourceUrl)}`;
});
 
  

//Search by cuisine

// Get the common ancestor element that contains all SVG groups
const svgContainer = document.getElementById("svgContainer");

// Get all the <g> elements inside the container 
const svgGroups = svgContainer.querySelectorAll("g");

// Event listener for each <g> element
svgGroups.forEach(svgGroup => {
    svgGroup.addEventListener("click", function() {
        // Get the cuisine type from the data attribute of the clicked <g> element
        const cuisineType = svgGroup.getAttribute("data-cuisine");

        // Call the getCuisinesFromAPI function with the cuisine type as the query
        getCuisinesFromAPI(cuisineType);
    });
});





//Search by calories

// Function to fetch recipes by maximum calories
function getRecipesByMaxCalories(maxCalories) {
    
    const apiKey = '075b51dbcd4d4419836f94c406a94c50';
  
    // findbyNutrients api endpoint with maxCalories as the parameter
    const url = `https://api.spoonacular.com/recipes/findByNutrients?maxCalories=${maxCalories}&apiKey=${apiKey}`;
  
    // Make the GET request
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Handle the response data (data contains recipes)
        const recipes = data.map(result => ({
          title: result.title,
          image: `${result.image}`,
          readyInMinutes: result.readyInMinutes,
          sourceUrl: result.sourceUrl,
        }));
  
        // Clear existing data in the recipesData array
        recipesData.length = 0;
  
        // Push fetched recipes into the recipesData array
        recipesData.push(...recipes);
  
        // Trigger displayRecipes function to create recipe cards
        displayRecipes(recipes);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
      });
  }
  


  
  // Event listener for the button to fetch recipes by maximum calories

  document.getElementById("maxButton").addEventListener("click", function () {
    const maxCalories = maxCaloriesSlider.value;
    // Call function to search by max calories
    getRecipesByMaxCalories(maxCalories);
});

const slider = document.getElementById("maxCaloriesSlider");
const caloriesValue = document.getElementById("caloriesValue");





// Function to update the calories when using the range slider
function updateCaloriesValue() {
    caloriesValue.textContent = slider.value;
}

// Event listener for slider to update the value display
slider.addEventListener("input", updateCaloriesValue);

// Initialize the value display
updateCaloriesValue();