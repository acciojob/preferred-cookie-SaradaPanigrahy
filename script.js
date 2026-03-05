//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// function to set cookie
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

// function to get cookie
function getCookie(name) {
  let cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    let [key, value] = cookie.trim().split("=");

    if (key === name) {
      return value;
    }
  }

  return null;
}

// apply saved preferences on page load
window.onload = function () {

  let savedSize = getCookie("fontsize");
  let savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize);
    fontSizeInput.value = parseInt(savedSize);
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    fontColorInput.value = savedColor;
  }
};

// save preferences
form.addEventListener("submit", function (e) {

  e.preventDefault();

  let size = fontSizeInput.value + "px";
  let color = fontColorInput.value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  document.documentElement.style.setProperty("--fontsize", size);
  document.documentElement.style.setProperty("--fontcolor", color);
});