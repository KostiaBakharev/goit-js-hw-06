const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

const liElements = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
ingredientsList.insertAdjacentHTML("beforeend", liElements);

//2

// ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ingredientsList.append(li);
//   ingredientsList.insertAdjacentElement("beforeend", li);
// });
