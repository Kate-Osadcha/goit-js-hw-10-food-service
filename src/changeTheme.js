const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const switchRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");


function setClassList() {
  const check = switchRef.checked;

  if (check) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
}
switchRef.addEventListener("change", setClassList);


function setLocalStorage() {
  const check = switchRef.checked;

  if (check) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.removeItem("theme", Theme.DARK);
    localStorage.setItem("theme", Theme.LIGHT);
  }
}
switchRef.addEventListener("change", setLocalStorage);


const themeInLocalStorage = localStorage.getItem('theme')
if (themeInLocalStorage === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK)
    switchRef.checked=true
}
