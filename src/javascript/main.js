// api 주소
const SHOPPING_DATA =
  "https://run.mocky.io/v3/5b8c281d-f1e1-4d33-b16c-01834a8cecc8";

// api에서 데이터 가져오기 (fetch 하기)
function loadItems() {
  return fetch(SHOPPING_DATA)
    .then((response) => response.json())
    .then((response) => response.items);
}

// html 만들어서 추가하기
function displayItems(items) {
  const contentContainer = document.getElementsByClassName("contentUl")[0];

  contentContainer.innerHTML = items
    .map((item) => createHTMLString(item))
    .join("");
}

function createHTMLString(item) {
  return `
      <li class="contentList">
        <img src=${item.image} alt="" />
        <span>${item.sex}, ${item.size} size</span>
      </li> 
  `;
}

function setEventListener(items) {
  const logo = document.getElementsByClassName("logo")[0];
  const tags = document.getElementsByClassName("tags")[0];
  logo.addEventListener("click", () => {
    displayItems(items);
  });
  tags.addEventListener("click", () => {
    onButtonClick(event, items);
  });
}

// 버튼 클릭했을때
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  console.log("온클릭 아이템즈", dataset);
  const filteredData = items.filter((item) => item[key] === value);
  displayItems(filteredData);
}

// 함수 호출!
loadItems().then((items) => {
  displayItems(items);
  setEventListener(items);
});
