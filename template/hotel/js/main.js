"use strict";

const button = document.querySelector("#book-now");
const bookForm = document.querySelector("#book-form");
const bookNowCtn = document.querySelector(".button-container");
const closeButton = document.querySelector("#close");


button.addEventListener("click", function(event) {
    bookForm.classList.toggle("hidden");
    bookNowCtn.classList.toggle("top");
});

closeButton.addEventListener("click", function(event) {
    bookForm.classList.remove("hidden");
    bookNowCtn.classList.remove("top");
});