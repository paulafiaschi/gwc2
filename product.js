const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

// This is the end point filtered by category / The sintax is defined by restdb
const url = `https://cocktails-240e.restdb.io/rest/gw-club?q={"_id" : {"$in" : ["${id}"]}}`;
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
    getProductPage(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

//Code for category (ie. dresses) list

//loop
function getProductPage(garment) {
  garment.forEach(showItem);
}

function showItem(item) {
  console.log(item);

  // create templates
  const template = document.querySelector("#product_template").content;

  // clone the template
  const copy = template.cloneNode(true);

  // change dinamic data
  document.querySelector("#category-bc").textContent = item.Category;
  document
    .querySelector("#category-bc")
    .setAttribute("href", "product_list.html?Category=" + item.Category);
  document.querySelector("#item-bc").textContent = item.Title;
  ß;
  copy.querySelector(".prod-brand").textContent = item.Brand;
  copy.querySelector(".prod-title").textContent = item.Title;
  copy.querySelector(".prod-price").textContent = "DKK " + item.Price;
  copy.querySelector("img").setAttribute("src", item.Image);
  copy.querySelector("img").setAttribute("alt", item.Title + "picture");
  copy.querySelector(".description").innerHTML = item.Description;
  copy.querySelector("#" + item.Size).classList.remove("no-stock");

  // append it to main
  const elemParent = document.querySelector("main");
  elemParent.appendChild(copy);
}
