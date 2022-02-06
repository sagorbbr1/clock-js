const secondHand = document.querySelector('.hand-second');
const minHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');

const ClockRun = function() {
    const now = new Date();

const second = now.getSeconds();
const min = now.getMinutes();
const hour = now.getHours();

const secondDeg = ((second / 60) * 360) + 90;

secondHand.style.transform = `rotate(${secondDeg}deg)`; 

const minDeg = ((min / 60) * 360) + 90;

minHand.style.transform = `rotate(${minDeg}deg)`;

const hourDeg = ((hour / 13) * 360) + 90;

hourHand.style.transform = `rotate(${hourDeg}deg)`
    
}

setInterval(ClockRun, 1000)