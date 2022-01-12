window.addEventListener("load", start);

// assigns active and inactive classes to style tabs and info
function start() {
    console.log("start tabs");
    document.querySelector("#lenders-tab").classList.add("active-tab");
    document.querySelector("#borrowers-tab").classList.add("inactive-tab");
    document.querySelector("#borrowers-info").classList.add("hidden");
    document.querySelector(".inactive-tab").addEventListener("click", toggleTab);
}

// sets me up to save time by writing a shorter expression when I need these elements
const lendersTab = document.querySelector("#lenders-tab");
const borrowersTab = document.querySelector("#borrowers-tab");
const lendersInfo = document.querySelector("#lenders-info")
const borrowersInfo = document.querySelector("#borrowers-info");

// toggles the active and inactive tabs, restarts itself, calls function for info sections
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

// toggles which set of steps (info) are shown
function toggleInfo() {
    console.log("toggle info");
    lendersInfo.classList.toggle("hidden");
    borrowersInfo.classList.toggle("hidden");
}