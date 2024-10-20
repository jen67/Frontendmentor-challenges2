(function () {
  ("use strict");

  /**
   * Function to set the theme based on whether it's dark or light.
   * @param {boolean} isDark - Indicates whether the dark theme is active.
   */
  const setTheme = (isdark) => {
    const body = document.body;
    const themeToggler = document.querySelector("#theme-switcher");

    if (isdark) {
      body.classList.add("dark-theme");
      themeToggler.src = "./images/icon-sun.svg";
      themeToggler.alt = "icon-sun";
      localStorage.setItem("theme", "dark-theme");
    } else {
      body.classList.remove("dark-theme");
      themeToggler.src = "./images/icon-moon.svg";
      themeToggler.alt = "icon-moon";
      localStorage.setItem("theme", "light");
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
      const themeToggler = document.querySelector("#theme-switcher");
    const form = document.querySelector("#task-input-form");
    const inputForm = document.querySelector("#task-input");
    const taskContainer = document.querySelector(".todo-list-container");
    const storedTheme = localStorage.getItem("theme");

    // Apply stored theme or system preference
    if (storedTheme === "dark-theme") {
      setTheme(true);
    } else if (storedTheme === "light") {
      setTheme(false);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(systemPrefersDark);
    }

    // Theme toggler click event
    themeToggler.addEventListener("click", () => {
      const isDarkTheme = document.body.classList.toggle("dark-theme");
      setTheme(isDarkTheme);
    });
      
      
      //update the todo count
         const updateTodoCount = () => {
           
         };
  });
    
})();
