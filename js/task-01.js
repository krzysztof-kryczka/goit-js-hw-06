const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
