/**
 * file: js/js.js
 * purpose: Behaviors
 **/



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


    let week =[
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
  ]

    const myDate = new Date
      console.log(myDate)
      results.innerHTML += " " + week [myDate.getDay ()] 



    
