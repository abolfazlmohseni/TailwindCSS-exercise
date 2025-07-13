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