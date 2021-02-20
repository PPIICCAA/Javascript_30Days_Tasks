const sec = document.querySelector(".s")
const minute = document.querySelector(".m")
const h = document.querySelector(".h")
function time(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360 + 90)
    sec.style.transform = `rotate(${secondsDegrees}deg)`

    const min = now.getMinutes();
    const minutesDegrees = ((min/60)*360 + 90)
    minute.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360 + 90)
    h.style.transform = `rotate(${hoursDegrees}deg)`
}
setInterval(time, 1000)