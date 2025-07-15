const themeBtn = document.querySelector(".themeBtn")
const themeBtnMb = document.querySelector(".themeBtnMb")
var theme = localStorage.getItem("theme")

if (theme == "dark") {
    document.documentElement.dataset.theme = "dark"

}

themeBtn.addEventListener("click", () => {
    chageTheme()
})

themeBtnMb.addEventListener("click", () => {
    chageTheme()
})

const chageTheme = () => {
    if (document.documentElement.dataset.theme == "light") {
        document.documentElement.dataset.theme = "dark"
        localStorage.setItem("theme", "dark")
    } else {
        document.documentElement.dataset.theme = "light"
        localStorage.setItem("theme", "light")
    }
}
const submenuBtn = document.querySelector(".submenuBtn")
const subMenu = document.querySelector(".subMenu")
submenuBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300")
    subMenu.classList.toggle("subMenu--open")
})

const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const overlay = document.querySelector(".overlay")
const closeMenu = document.querySelector(".closeMenu")

menuIcon.addEventListener("click", () => {
    menuMange()
})

closeMenu.addEventListener("click", () => {
    menuMange()
})

overlay.addEventListener("click", () => {
    menuMange()
})

const menuMange = () => {
    menu.classList.toggle("-right-64")
    menu.classList.toggle("right-0")
    overlay.classList.toggle("hidden")
    overlay.classList.toggle("flex")
}