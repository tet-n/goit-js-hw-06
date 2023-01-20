const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('#ingredients');

const createItems = function (items) {
  return items.map((item) => {
    const li = document.createElement('li');
    li.classList = 'item';
    li.textContent = item;
    return li;
  });
};

const items = createItems(ingredients);
listRef.append(...items);

