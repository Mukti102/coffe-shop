const navbar = document.querySelector(".navbar-menu");

document.querySelector("#menu").onclick = () => {
    navbar.classList.toggle("active")
}

const humberger = document.querySelector("#menu")
// click selain navbar //
document.addEventListener("click",function(e){
    if(!navbar.contains(e.target) && !humberger.contains(e.target)){
        navbar.classList.remove("active")
    }
}) 
const h1 = document.querySelector(".h1")


// window.addEventListener("scroll",(e) => {
//     let con = Math.floor(Math.random()*20);
//     h1.style.transform = `translate(${con}%)`
//     console.log(con)
// })
// 