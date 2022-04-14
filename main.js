const secondHand = document.querySelector('.hand__second')
const minuteHand = document.querySelector('.hand__minute')
const hourHand = document.querySelector('.hand__hour')
const outerCircle = document.querySelector('.outer-circle')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

function runClock() {
  const currentTime = new Date()
  const currentHours = currentTime.getHours()
  const currentMinutes = currentTime.getMinutes()
  const currentSeconds = currentTime.getSeconds()
  changeColor(currentHours)

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
  outerCircle.style.transform = `translate(-50%, -50%) rotate(${-hourHandRotateDegree}deg)`
  moon.style.transform = `translateY(-40%) rotate(${hourHandRotateDegree - 360}deg)`
  sun.style.transform = `translateY(40%) rotate(${hourHandRotateDegree}deg)`
}
function changeColor(hour) {
  const colorStyles = [
    {
      name: '--clock-clr',
      value: 'pink'
    },
    {
      name: '--clock-border-clr',
      value: '#fff'
    },
    {
      name: '--sky-clr',
      value: 'lightblue'
    },
    {
      name: '--ground-clr',
      value: 'green'
    }
  ]
  if (hour >= 6 && hour < 18) {
    colorStyles.forEach(colorStyle => {
      document.body.style.setProperty(colorStyle.name, colorStyle.value)
    })
  }
}
runClock()

setInterval(runClock, 1000)