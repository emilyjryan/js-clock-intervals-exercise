// Variables

// DOM selectors
const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")

//hour rotation:
function setTime() {
    let time = new Date()
    let secondDegrees = (time.getSeconds() * 6)
    // console.log(secondDegrees)
    let minuteDegrees = (time.getMinutes() * 6)
    // console.log(minuteDegrees)
    let hourDegrees = 0.5 * (time.getHours() * 60 + time.getMinutes());
    // let hourDegrees = (time.getHours() * 30)
    // console.log(hourDegrees)
    
    second.style.transform = `translate(-50%, -50%) rotate(${secondDegrees}deg)`;

    minute.style.transform = `translate(-50%, -50%) rotate(${minuteDegrees}deg)`;

    hour.style.transform = `translate(-50%, -50%) rotate(${hourDegrees}deg)`;
}
setInterval(setTime,1000)
