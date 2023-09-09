// Function to extract and display recipe details
// Function to extract and display recipe details
async function extractRecipeDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeUrl = urlParams.get("recipeUrl");

    try {
        const apiKey = '075b51dbcd4d4419836f94c406a94c50'; // Replace with your Spoonacular API key

        // Make a request to the Spoonacular extract endpoint
        const response = await fetch(`https://api.spoonacular.com/recipes/extract?url=${encodeURIComponent(recipeUrl)}&apiKey=${apiKey}`);
        const data = await response.json();

        // Extract relevant recipe information
        const title = data.title;
        const ingredientsList = data.extendedIngredients.map(ingredient => ingredient.original);
        const instructions = data.instructions;
        const imageUrl = data.image;
        const recipeId = data.id; // Extract the recipe ID from the data

        // Create HTML to display the recipe details dynamically
        const recipeDetailsHTML = `
            <div id="chosenrecipe">
                <h2>${title}</h2>
                <div class="recpageimgwrapper">
                    <img class="recimg" src="${imageUrl}" alt="${title}" style="max-width: 100%;">
                </div>
                <div class="ingredientswrapper">
                    <p>Ingredients</p>
                    <ul>
                        ${ingredientsList.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                <div class="instructionswrapper">
                    <p>Instructions</p>
                    <p>${instructions}</p>
                </div>
            </div>
        `;

        // Display the recipe details in the "recipeDetails" div
        document.getElementById('recipeDetails').innerHTML = recipeDetailsHTML;
        
        // Now, you can call the function to display similar recipes using the extracted recipeId
        displaySimilarRecipes(recipeId);

    } catch (error) {
        console.error(error);
    }
}

// Call the function when the page loads
window.onload = extractRecipeDetails;

// Rest of your code for displaying similar recipes remains the same


// this is the code to get similar recipes in the carousel
async function displaySimilarRecipes(recipeId) {
    try {
        const apiKey = '075b51dbcd4d4419836f94c406a94c50'; // Replace with your Spoonacular API key

        // Make a request to the Spoonacular similar recipes endpoint
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${apiKey}&number=5`);
        const data = await response.json();

        // Log the data to inspect the API response
        console.log('Similar Recipes API Response:', data);

        // Create HTML to display the list of similar recipes
        const similarRecipesHTML = data.map(recipe => {
            // Use the correct property name to access the image URL
            const imageUrl = `https://spoonacular.com/recipeImages/${recipe.id}-480x360.${recipe.imageType}`;
            
            return `
                <div class="cardwrappersugg">
                    <div class="imagewrapper"> 
                        <img src="${imageUrl}" alt="${recipe.title}" width="400">
                    </div>

                    <div class="textwrapper"> 
                        <div class="recipetitlewrapper"> <!-- this is wrapper for the text -->
                            <p id="recipetitle">${recipe.title}</p>
                        </div>

                        <div class="recipetimewrapper"> <!-- this is wrapper for the text -->
                            <div class="icon-wrapper">
                                <img src="images/icons8-clock-50.png" alt="Clock Icon" class="clockicon">
                            </div>
                            <p>Ready in ${recipe.readyInMinutes} minutes</p>
                        </div>

                        <div class="recipeurlwrapper"> <!-- this is wrapper for the text -->
                        <a href="recipepagetester.html?recipeUrl=${encodeURIComponent(recipe.sourceUrl)}" class="button" target="_blank">View Recipe</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Log the generated HTML to inspect the structure
        console.log('Generated Similar Recipes HTML:', similarRecipesHTML);

        // Display the similar recipes in the "similarRecipes" div
        document.getElementById('similarRecipes').innerHTML = similarRecipesHTML;
    } catch (error) {
        console.error(error);
    }
}


