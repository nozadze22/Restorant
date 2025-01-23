

    const menuUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';





const searhcBtn = document.querySelector('#search-btn');
const melaList = document.querySelector('#meal')
const mealDetailsContent = document.querySelector('.meal-details-content');
const resipeCloseBtn = document.querySelector('#recipe-close-btn');
const searchinput =  document.querySelector("#search-input")


//event liseners

searhcBtn.addEventListener('click', getMealsList);
melaList.addEventListener("click", getMealRecipe)
resipeCloseBtn.addEventListener("click", () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe')
})


//funcctionality
searchinput.addEventListener("keyup", () => {
   if(searchinput.value !="") {
    searhcBtn.style.display = "block"
   }else if(searchinput.value === ''){
    searhcBtn.style.display = "none"
    melaList.innerHTML = ""
   }
})
2
function getMealsList() {
   let searchInputText = document.querySelector('#search-input').value.trim();

 

   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
   .then(response => response.json())
   .then(data => {
    let html =""
    if(data.meals) {
        data.meals.forEach(meal => {
html += `
        <div class="meal-item" data-id = "${meal.idMeal}">
            <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="">
            </div>
            <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn" >get recipe</a>
            </div>
        </div>
`;
        });
    melaList.classList.remove('notFound')
    }else (
        html = "Sorry, no ingredients with that name was found! Or we don't have it in the menu"
    )
    melaList.innerHTML = html;
   })
}


function getMealRecipe(e) {
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(responce => responce.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

//modal


function mealRecipeModal(meal) {
    console.log(meal)
    meal = meal[0]

    let html = `
    
            <h2 class="recipe-title">${meal.strMeal}</h2 >
            <p class="recipe-category">${meal.strCategory}</p>
            <div class="recipe-instruct">
                <h3>instruction</h3>
                <p>${meal.strInstructions}</p>
            <p${meal.strArea}</p>
            </div>
        <div class="recipe-meal-img">
                <img src="${meal.strMealThumb}" alt="">
        </div>
            <div class="recipe-link">
                <a href="${meal.strYoutube}" target="_blank">watch video</a>
            </div
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe')
}