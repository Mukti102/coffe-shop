const navbar = document.querySelector(".navbar-menu");
const humberger = document.querySelector("#menu")
const searchForm = document.querySelector(".search-form")
const searcBox = document.querySelector("#pencarian")
const searchButton = document.querySelector("#search")
const shopingCart = document.querySelector(".shoping-cart")
const cartButton = document.querySelector("#sopping")
const detail = document.querySelectorAll("#eye")
const modal = document.querySelector(".modal")

// hamburger
document.querySelector("#menu").onclick = () => {
    navbar.classList.toggle("active")
}
// shoping-cart
document.querySelector("#sopping").onclick = (e) => {
    shopingCart.classList.toggle("active")
    e.preventDefault()
}
// search
document.querySelector("#search").onclick = (e) => {
    searchForm.classList.toggle("active")
    searcBox.focus()
    e.preventDefault()
}
// click selain navbar //
document.addEventListener("click",function(e){
    if(!navbar.contains(e.target) && !humberger.contains(e.target)){
        navbar.classList.remove("active")
    }
    if(!searchForm.contains(e.target) && !searchButton.contains(e.target)){
        searchForm.classList.remove("active")
    }
    if(!shopingCart.contains(e.target) && !cartButton.contains(e.target)){
        shopingCart.classList.remove("active")
    }
})
// detail
detail.forEach((btn) => {
    btn.onclick = (e) => {
        modal.style.display = "flex";
        e.preventDefault()
    }
})
document.querySelector(".close-icon").onclick = (e) => {
    modal.style.display = "none";
    e.preventDefault()
}


// window.addEventListener("scroll",(e) => {
//     let con = Math.floor(Math.random()*20);
//     h1.style.transform = `translate(${con}%)`
//     console.log(con)
// })
// 