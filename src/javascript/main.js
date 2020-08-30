const SHOPPING_DATA =
  "https://run.mocky.io/v3/5b8c281d-f1e1-4d33-b16c-01834a8cecc8";

function loadItems() {
  return fetch(SHOPPING_DATA)
    .then((response) => response.json())
    .then((response) => response.items);
}

function displayItems(items) {
  const contentContainer = document.getElementsByClassName("contentUl")[0];
  contentContainer.innerHTML = items.map((item) => createHTMLString(item));
}

function createHTMLString(item) {
  return `
      <li class="contentList">
        <img src=${item.image} alt="" />
        <span>${item.sex}, ${item.size} size</span>
      </li> 
  `;
}

loadItems().then((items) => {
  console.log(items);
  displayItems(items);
});
