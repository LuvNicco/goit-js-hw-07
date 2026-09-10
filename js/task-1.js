const categories = document.querySelector("#categories");

const categoryItems = categories.querySelectorAll(".item");

console.log(`Number of categories: ${ categoryItems.length }`);

categoryItems.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryTitle}`); console.log(`Elements: ${categoryElements}`);
});