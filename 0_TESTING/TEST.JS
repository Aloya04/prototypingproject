document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Viby%20J,dk&appid=7d9959504b06f16555b4b3c0fdd4fe9d&units=metric")
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            document.getElementById("temp").textContent = temperature;
        })
        .catch(error => {
            console.error("Oops, something went wrong: " + error);
        });
});
