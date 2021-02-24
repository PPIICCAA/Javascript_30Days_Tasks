let root = document.getElementById("root")
let number = 30
let text = ""

function body(){
    for (let i = 1; i <= number; i++){
    text += `
    <button onclick="location.href='${i}/index.html'" class="day">${i}</button>
    `
    }
}
body()
root.innerHTML = text