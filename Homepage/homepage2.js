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

    function getFormattedDate() {
      const daysOfWeek = ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"];
      const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
      
      
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getDay()];
        const month = months[today.getMonth()];
        const day = today.getDate();
      
        return dayOfWeek + ", " + month + " " + day;
      }

const formattedDate = getFormattedDate();

document.getElementById("formatted-date").textContent = formattedDate;
  