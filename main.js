function same(Praket) {
if (Praket === "()"||"[]"||"{}") {
    return true
} else {
    return false
}
}

console.log(same("})"));






let menu = document.querySelector(".menu");
let navbar = document.querySelector(".nav");
let mark = document.querySelector(".xmark");

menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    mark.classList.toggle("active")
    navbar.classList.toggle("show")
})

mark.addEventListener("click", () => {
    mark.classList.toggle("active")
    menu.classList.toggle("active")
    navbar.classList.toggle("show")
})






let outImg = document.querySelectorAll(".products .box img")
let box = document.querySelectorAll(".products .box")


// change img
let mainImg = document.querySelector(".mainImg")
let smallImg = document.querySelectorAll(".smallImg")

smallImg[0].addEventListener("click", function () {
    mainImg.src = smallImg[0].src;
})
smallImg[1].addEventListener("click", function () {
    mainImg.src = smallImg[1].src;
})
smallImg[2].addEventListener("click", function () {
    mainImg.src = smallImg[2].src;
})
smallImg[3].addEventListener("click", function () {
    mainImg.src = smallImg[3].src;
})
// ////////////
