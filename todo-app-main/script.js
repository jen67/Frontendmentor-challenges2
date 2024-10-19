(function () {
    "use strict";
    
    document.addEventListener("DOMContentLoaded", () => {
        



    })
})();

const themeToggler = document.querySelector("#theme-switcher");
const circledCheck = document.querySelectorAll(".circled-check");
const listItems = document.querySelectorAll(".todo-item");
const deleteItems = document.getElementsByClassName("delete-task");
const body = document.body;
const header = document.querySelector('header');

// Add event listener to each circledCheck element
circledCheck.forEach(check => {
  check.addEventListener("click", () => {
    // Add your click event logic here
  });
});

themeToggler.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeToggler.src = "./images/icon-sun.svg";
      themeToggler.alt = "sun icon";
      header.style.backgroundImage = "url(./images/bg-mobile-dark.jpg)"
  } else {
    themeToggler.src = "./images/icon-moon.svg";
      themeToggler.alt = "moon icon";
      header.style.backgroundImage = "url(./images/bg-mobile-light.jpg)";
  }
});