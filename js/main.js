const hamburgerButton = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".drop-menu");

hamburgerButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("drop-menu--dropped");
    hamburgerButton.classList.toggle("hamburger--clicked"); 


  console.log("yo")
});
