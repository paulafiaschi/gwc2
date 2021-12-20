window.addEventListener("load", start);

function start() {
    console.log("start tabs");
    document.querySelector("#lenders-tab").classList.add("active-tab");
    document.querySelector("#borrowers-tab").classList.add("inactive-tab");
    document.querySelector("#borrowers-info").classList.add("hidden");
    document.querySelector(".inactive-tab").addEventListener("click", toggleTab);
}

const lendersTab = document.querySelector("#lenders-tab");
const borrowersTab = document.querySelector("#borrowers-tab");
const lendersInfo = document.querySelector("#lenders-info")
const borrowersInfo = document.querySelector("#borrowers-info");

function toggleTab() {
    console.log("toggle tab");
    document.querySelector(".inactive-tab").removeEventListener("click", toggleTab);
    lendersTab.classList.toggle("active-tab");
    lendersTab.classList.toggle("inactive-tab");
    borrowersTab.classList.toggle("active-tab");
    borrowersTab.classList.toggle("inactive-tab");
    document.querySelector(".inactive-tab").addEventListener("click", toggleTab);
    toggleInfo();
}

function toggleInfo() {
    console.log("toggle info");
    lendersInfo.classList.toggle("hidden");
    borrowersInfo.classList.toggle("hidden");
}