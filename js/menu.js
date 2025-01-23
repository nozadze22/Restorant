
const  search_input = document.querySelector("#search_input");
const submit_btn = document.querySelector('#search_buuton');
const meal_container = document.querySelector('.meal-display')




search_input.addEventListener("input", GetMealList )

search_input.addEventListener("keyup", () => {
    if(search_input.value != "") {
        searhcBtn.style.display = "block"
    }else if (search_input.value === "") {
searhcBtn.style.display = "none"
meal_container.html = ""
    }
})






function GetMealList() {
    let searchText = document.querySelector('#search_input').value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(responce => responce.json())
    .then(data => {
    console.log(data)

    let html = "";

    if(data.meals) {
        data.meals.forEach(meal => {
            
            html += `
    <div class="meal_card">
    <div class="image">
        <img src="${meal.strMealThumb}" alt="">
    </div>
    <div class="content">
        <h3>name: <span>${meal.strMeal}</span></h3>
        <h3>country: <span>${meal.strArea}</span></h3>
        <h3>Category: <span>${meal.strCategory}</span></h3>
    </div>
        <button class="btn btn-primary" id="reservation">
        <a href="./reservation.html">reservation</a>
        </button>

    </div>
            `;
        });
        meal_container.innerHTML = html
    }else {
        html= "soryy we have not now"
    }
    
    })
}

GetMealList()
























