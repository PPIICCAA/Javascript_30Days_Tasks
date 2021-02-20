const inputs = document.querySelectorAll(".controls input")

function handleUpDate() {
    const suffix = this.dataset.sizeing || ""
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(element => element.addEventListener("change", handleUpDate));
inputs.forEach(element => element.addEventListener("mousemove", handleUpDate));