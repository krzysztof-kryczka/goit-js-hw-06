const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElement = document.querySelector("#ingredients");
const arrayLi = [];

for (const ingredient of ingredients) {
  const itemLi = document.createElement("li");
  itemLi.innerText = ingredient;
  itemLi.classList.add("item");
  arrayLi.push(itemLi);
}

ingredientsElement.append(...arrayLi);
