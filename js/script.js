const getting = () =>{
    const userFeild = document.getElementById('user-feild')
    const userText = userFeild.value;
    userFeild.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userText}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayResultItem(data.meals))
}
const displayResultItem = (items) => {
    const displayResult = document.getElementById('item')
    items.forEach(element => {
        const item = document.createElement('div')
        item.classList.add('col')
        item.innerHTML = `
        <div class="card">
            <img src="${element.strMealThumb} " class="card-img-top" alt="${element.strMealThumb}">
            <div class="card-body">
            <h5 class="card-title">${element.strMeal} </h5>
            <p class="card-text">${element.strInstructions.slice(0, 150)}</p>
            </div>
        </div>`
       displayResult.appendChild(item)
    });
}
document.getElementById('submit').addEventListener('click', getting)