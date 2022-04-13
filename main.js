const secondHand = document.querySelector('.hand__second')
const minuteHand = document.querySelector('.hand__minute')
const hourHand = document.querySelector('.hand__hour')

function runClock() {
  const currentTime = new Date()
  const currentHours = currentTime.getHours()
  const currentMinutes = currentTime.getMinutes()
  const currentSeconds = currentTime.getSeconds()
  const secondHandRotateDegree = (currentSeconds * 6) + 90
  const minuteHandRotateDegree = (currentMinutes * 6) + 90
  // const hourHandRotateDegree = (currentHours * 30) + 90
  secondHand.style.transform = `rotate(${secondHandRotateDegree}deg)`
  minuteHand.style.transform = `rotate(${minuteHandRotateDegree}deg)`
  // hourHand.style.transform = `rotate(${hourHandRotateDegree}deg)`
  // console.log({currentSeconds})
  // console.log({currentMinutes})
}

// setInterval(runClock, 1000)