const ul = document.getElementById('categories');
console.log(ul.children.length);
const ulArr = ul.children;

[...ulArr].forEach((item) =>
  console.log(
    `Category: ${item.firstElementChild.textContent}\nAnimals: ${item.lastElementChild.children.length}`
  )
);
