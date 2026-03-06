import "../styles/main.css";

const button = document.getElementById("toggle-color-mode");
const root = document.documentElement;

button.addEventListener("click", () => {
  const current = root.dataset.theme;

  root.setAttribute("data-theme", current === "dark" ? "light" : "dark");

  localStorage.setItem("theme", root.dataset.theme);
});

const saved = localStorage.getItem("theme");

if (saved) {
  document.documentElement.setAttribute("data-theme", saved);
}
