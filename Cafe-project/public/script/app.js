const themeBtn = document.querySelector(".themeBtn")

var theme = localStorage.getItem("theme")
if (theme == "dark") {
    document.documentElement.dataset.theme = "dark"

}
themeBtn.addEventListener("click", () => {
    if (document.documentElement.dataset.theme == "light") {
        document.documentElement.dataset.theme = "dark"
        localStorage.setItem("theme", "dark")
    } else {
        document.documentElement.dataset.theme = "light"
        localStorage.setItem("theme", "light")
    }
})