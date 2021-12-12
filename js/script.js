const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("Category");
console.log(category);

// This is the end point filtered by category / The sintax is defined by restdb
const url = `https://cocktails-240e.restdb.io/rest/gw-club?q={"Category" : {"$in" : ["${catgory}"]}}`;
console.log(url);

// The API key
const options = {
  headers: {
    "x-apikey": "613731bc43cedb6d1f97edad",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // we have the data
    getProductList(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

//Code for categor (ie. dresses) list

//loop
function getProductList(garment) {
  garment.forEach(showItem);
}

function showItem(item) {
  console.log(item);

  // create templates
  const template = document.querySelector("#recipelist_template").content;

  // clone the template
  const copy = template.cloneNode(true);

  // make the product page match the recipe we are gonna click
  copy
    .querySelector("a")
    .setAttribute("href", "productpage.html?cocktail=" + recipe.Name);
  // console.log(recipe.Name);

  // change dinamic data
  document.querySelector(".spirit-header").textContent = spirit;
  copy.querySelector("h3").textContent = recipe.Name;
  copy.querySelector("img").setAttribute("src", recipe.img);
  copy.querySelector("img").setAttribute("alt", recipe.Name + "picture");

  // append it to main
  const elemParent = document.querySelector("main");
  elemParent.appendChild(copy);
}
