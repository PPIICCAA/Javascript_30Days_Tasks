const paneles = document.querySelectorAll(".panel")

function toggleopen(){
    this.classList.toggle("open")
}
function toggletransition(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active")
    }
}
paneles.forEach(element =>  element.addEventListener("click", toggleopen));
paneles.forEach(element =>  element.addEventListener("transitionend", toggletransition));
