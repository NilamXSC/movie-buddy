document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const heroCube = document.querySelector(".cube-loader");

  function showLoading() {
    if (loader) loader.classList.remove("hidden");
    if (heroCube) heroCube.style.display = "block";
  }

  function hideLoading() {
    if (loader) loader.classList.add("hidden");
    if (heroCube) heroCube.style.display = "none";
  }

  hideLoading();
});