const hourHand = document.querySelector(".hand")
const mintHand = document.querySelector(".minthand")
const secHand = document.querySelector(".sechand")

const currentTime = () => {
  const d = new Date();
  let hour = d.getHours()%12;
  let minutes = d.getMinutes();
  let seconds = d.getUTCSeconds()
  return [hour, minutes, seconds]
}

setInterval(() => {
  let timeArr = currentTime()
  let hours = timeArr[0]
  let minutes =  timeArr[1]
  let seconds = timeArr[2]
  let hourDeg = (hours*30)-90+(minutes*.5)
  let mintDeg = -90+(minutes*6)
  let secDeg = -90+(seconds*6)
  console.log(hours, minutes);
  console.log(mintDeg);
  hourHand.style.transform = `rotate(${hourDeg}deg)`
  mintHand.style.transform = `rotate(${mintDeg}deg)`
  secHand.style.transform = `rotate(${secDeg}deg)`
}, 1000)