/**
 *
 * @author Shivam
 * @returns
 */

console.log("index.js connected!! by shivam");

async function getAllCategory() {
  let categories = await fetch("http://localhost:8080/api/category");
  let container = document.querySelector(".category-content");
  container.innerHTML = "";
  let arr = await categories.json();
  // console.log(arr );
  renderCategory(arr, container);
}

function renderCategory(categories, container) {
  categories.forEach((cat) => {
    let category = `<div class="category-element" >
            <span class="text font1" class="text"> 
                <a href="all-ques-of-category.html" id="${cat.categoryID}">${cat.categoryName}</a>
            </span>
            <img src="../img/yoga.png">
        </div>`;
    container.innerHTML += category;
  });
  container.childNodes.forEach((category) => {
    category.addEventListener("click", goToCategoryQuestions);
  });
}

function goToCategoryQuestions(event) {
  event.preventDefault();
  console.log(event.target.id);
  const id = event.target.id;
  localStorage.setItem("category_id", id);
  window.location.href = "all-ques-of-category.html";
}

document.addEventListener("DOMContentLoaded", getAllCategory);
