
const showEl = document.getElementById("showbtn")

function showCopyHolder() {
    let cpyBox = document.getElementById("cpy-box")

    if(cpyBox.style.display === "none") {
        cpyBox.style.display = "block"
        showEl.style.background = "white"
        showEl.style.color = "var(--button-clr)"
    } else {
        cpyBox.style.display = "none"
        showEl.style.background = "var(--button-clr)"
        showEl.style.color = "white"
    }
}