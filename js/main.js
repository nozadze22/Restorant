
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php' ;   
// Make a GET request
function getProducts (){

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();s
})
.then(data => {

    GetProducts(data)
   
}).catch(error => {
    console.error('Error:', error);

});
}

getProducts()


function GetProducts(data) {
const products_container = document.querySelector(".category")
const products = data.categories;

products.forEach(product => {

    products_container.innerHTML += `
   <div class="category_prdoucts">
 
   <div class="card">
  <img id="img" src="${product.strCategoryThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.strCategory}</h5>
    <p class="product-description">${product.strCategoryDescription}</p>
   
  </div>
  <div class="target">
  <a href="./menu.html" class="targetplius">
  Menu
  </a>
  </div>
   </div>
    `;

    console.log(products_container)
    const card = document.querySelectorAll(".card");

const fullScreenOverlay = document.querySelector('.full-screen-overlay');
const closeOverlayButton = document.querySelector('.close-overlay');
    card.forEach(card => {
        card.addEventListener("click", (event) => {
            if(event.target.classList.contains('view-product'))
            console.log(event.target.classList)
            fullScreenOverlay.classList.add('active');
            const overlayContent = fullScreenOverlay.querySelector('.product-details');
            overlayContent.innerHTML = card.innerHTML;

            
            
        });
    });
    closeOverlayButton.addEventListener('click', () => {
        fullScreenOverlay.classList.remove('active');
      });
});

}

const main = document.querySelector('.main')
const show_button = document.querySelector("#showme");
const back_button = document.querySelector("#backtome")
const category = document.querySelector(".second_category")
const hompage_templates = document.querySelector(".backtome")


show_button.addEventListener("click", () => {
category.style.display = "block"
hompage_templates.style.display = "none"
show_button.style.display = "none"
back_button.style.display = "block"

} );


back_button.addEventListener("click", () => {
    category.style.display = "none"
    hompage_templates.style.display = "block"
    show_button.style.display = "block"
    back_button.style.display = "none"
    
    } );
    
    


