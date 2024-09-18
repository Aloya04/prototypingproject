function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('clock').innerHTML = h + ":" + m;
  
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const daysOfWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeekArray[dayOfWeek];
const month = currentDate.getMonth();
const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonth = monthsArray[month];
const date = currentDate.getDate();
  
const dateTimeString = `${currentDayOfWeek}, ${currentMonth} ${date}`;
document.getElementById("dateTime").textContent = dateTimeString;

function checkTimeForRedirection() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 23 || currentHour < 6) {
    if (sessionStorage.getItem('redirected') !== 'night') {
      sessionStorage.setItem('redirected', 'night');
      window.location.href = "../1_Lockscreen_Night/index2.html";
    }
  }
}

window.onload = checkTimeForRedirection;
setInterval(checkTimeForRedirection, 60000); // Check every minute
