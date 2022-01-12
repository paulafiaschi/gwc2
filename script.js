// this is to give the header a background color when the user scrolls
const header = document.getElementById("header");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add("background-color");
    } else {
        header.classList.remove("background-color");
    }
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("Category");
console.log(category);

window.addEventListener("load", start);
window.addEventListener("load", allowMenu);
let checked = document.querySelector(".filter_" + category);

// This is the end point filtered by category / The syntax is defined by restdb
const url = `https://cocktails-240e.restdb.io/rest/gw-club?q={"Category" : {"$in" : ["${category}"]}}`;
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

//Code for category (ie. dresses) list

//loop
function getProductList(garment) {
    garment.forEach(showItem);
}

function showItem(item) {
    console.log(item);

    // create templates
    const template = document.querySelector("#categoryList_template").content;

    // clone the template
    const copy = template.cloneNode(true);

    // make the product page match the item we are gonna click
    copy
        .querySelector("a")
        .setAttribute("href", "product_view.html?id=" + item._id);
    console.log(item._id);

    // change dinamic data
    document.querySelector(".category-header").textContent = category;
    copy.querySelector("h3").textContent = item.Title;
    copy.querySelector("img").setAttribute("src", item.Image);
    copy.querySelector("img").setAttribute("alt", item.Title + "picture");
    copy.querySelector("p").textContent = "DKK " + item.Price;
    copy.querySelector("h2").textContent = item.Brand;

    // append it to main
    const elemParent = document.querySelector("main");
    elemParent.appendChild(copy);
}

function start() {
    checked.innerHTML = "check_box";
    document.querySelector(".check-filter").addEventListener("click", checkBox);
    document.querySelector("#brand-filter").addEventListener("click", showFilter);
}

function checkBox() {
    console.log("filter checked");
    document.querySelector(".check-box").innerHTML = "check_box";
}

function showFilter() {
    document.querySelector(".brand-content").classList.remove("none");
    document.querySelector(".brand-content").classList.add("block");
    console.log("open filter");
    document
        .querySelector("#brand-filter")
        .removeEventListener("click", showFilter);
    document
        .querySelector("#brand-filter")
        .addEventListener("click", closeFilter);
    document.querySelector(".brand-arrow").innerHTML = "expand_less";
}

function closeFilter() {
    document.querySelector(".brand-content").classList.remove("block");
    document.querySelector(".brand-content").classList.add("none");
    console.log("close filter");
    document
        .querySelector("#brand-filter")
        .removeEventListener("click", closeFilter);
    document.querySelector("#brand-filter").addEventListener("click", showFilter);
    document.querySelector(".brand-arrow").innerHTML = "expand_more";
}

function allowMenu() {
    document.querySelector(".burger-icon").addEventListener("click", openMenu);
    document.querySelector(".cross-icon").addEventListener("click", closeMenu);
}

function openMenu() {
    console.log("open menu");
    document.querySelector(".mob-menu").classList.remove("close");
    document.querySelector(".mob-menu").classList.add("show");
    document.querySelector(".burger-icon").removeEventListener("click", openMenu);
    document.querySelector(".cross-icon").addEventListener("click", closeMenu);
}

function closeMenu() {
    console.log("close menu");
    document.querySelector(".mob-menu").classList.remove("show");
    document.querySelector(".mob-menu").classList.add("close");
    document.querySelector(".cross-icon").removeEventListener("click", closeMenu);
    document.querySelector(".burger-icon").addEventListener("click", openMenu);
}