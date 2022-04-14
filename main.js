const secondHand = document.querySelector('.hand__second')
const minuteHand = document.querySelector('.hand__minute')
const hourHand = document.querySelector('.hand__hour')

function runClock() {
  const currentTime = new Date()
  const currentHours = currentTime.getHours()
  const currentMinutes = currentTime.getMinutes()
  const currentSeconds = currentTime.getSeconds()

  const secondHandRotateDegree = (currentSeconds * 6)
  const minuteHandRotateDegree = (currentMinutes * 6)

  let hourHandRotateDegree = (currentHours > 11 ? currentHours - 12 : currentHours) * 30
  const minuteCauseHourHandRotate = Math.floor(currentMinutes / 10)
  if (minuteCauseHourHandRotate === 5) {
    hourHandRotateDegree += 24
  } else if (minuteCauseHourHandRotate !== 0) {
    hourHandRotateDegree += minuteCauseHourHandRotate * 6
  }

  secondHand.style.transform = `translate(-80%, -50%) rotate(${secondHandRotateDegree}deg)`
  minuteHand.style.transform = `translate(-100%, -50%) rotate(${minuteHandRotateDegree}deg)`
  hourHand.style.transform = `translate(-100%, -50%) rotate(${hourHandRotateDegree}deg)`
}
runClock()

setInterval(runClock, 1000)