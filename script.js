var navBar = document.querySelector(".navbar"),
    closeButton = document.querySelector(".close-button"),
    hamburgerButton = document.querySelector(".hamburger-button");

hamburgerButton.addEventListener("click", function(){
    navBar.classList.add("mobile-navbar");
})
closeButton.addEventListener("click", function(){
    navBar.classList.remove("mobile-navbar");
})