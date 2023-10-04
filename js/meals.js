const loadMeals = (input) => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
fetch(url)
.then(res => res.json())
.then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
const mealContainer = document.getElementById('meals-container');
mealContainer.innerText = ' ';
meals.forEach(meal =>{
console.log(meal)
const mealDiv = document.createElement('div');
mealDiv.classList.add('col');
mealDiv.innerHTML = `
<div class="card">
<div class="card-body">
<h5 class="card-title">Name: ${meal.strMeal} </h5>
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
`
mealContainer.appendChild(mealDiv);

})
}

const searchMeals = () => {
    const searchText = document.getElementById('input-field');
    const searchInput = searchText.value;
    loadMeals(searchInput)
}
loadMeals('rice');
