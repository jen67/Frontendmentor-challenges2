(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggler = document.querySelector("#theme-switcher");
    const header = document.querySelector("header");
    const Form = document.querySelector("#task-input-form");
    const inputForm = document.querySelector("#task-input");
    const TaskContainer = document.querySelector(".todo-list-container");

      
    function applytheme(theme) {
      if (theme === "dark") {
          body.classList.add("dark-theme");
          themeToggler.src = "./images/icon-sun.svg";
          themeToggler.alt = "sun icon";
        }
      else {
          body.classList.remove('dark-theme');
          themeToggler.src = "./images/icon-moon.svg";
          themeToggler.alt = "moon icon";
        }
    }
  });
})();

const circledCheck = document.querySelectorAll(".circled-check");
const listItems = document.querySelectorAll(".todo-item");
const deleteItems = document.getElementsByClassName("delete-task");
const body = document.body;
const header = document.querySelector("header");

// Add event listener to each circledCheck element
circledCheck.forEach((check) => {
  check.addEventListener("click", () => {
    // Add your click event logic here
  });
});

themeToggler.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    
  } else {
    themeToggler.src = "./images/icon-moon.svg";
    themeToggler.alt = "moon icon";
  }
});
