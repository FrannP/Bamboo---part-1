const hamburgerButton = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".drop-menu");
const htmlOverflow = document.querySelector("html")

hamburgerButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("drop-menu--dropped");
    hamburgerButton.classList.toggle("hamburger--clicked");
    htmlOverflow.classList.toggle("overflow--hidden");
    console.log("yo")

});
