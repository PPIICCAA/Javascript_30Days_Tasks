function music(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.individual-box[data-key="${e.keyCode}"]`)
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("on");
};
function removeClassList(e) {
    if (e.propertyName !== "transform") 
    return;
    this.classList.remove("on")
}
const keys = document.querySelectorAll(".individual-box")
keys.forEach(element => element.addEventListener("transitionend", removeClassList));
window.addEventListener("keydown", music)
