// This code counts the number of clicks within a 2-second time frame. 
// If the click count reaches or exceeds 10, it redirects the user to 'easter-egg.html'. 
// If there is no click within 1.5 seconds, the count is reset.

var clickCount = 0;
        var timeout;

        function redirectToPage() {
            if (clickCount >= 10) {
                window.location.href = '../EasterEgg/easter-egg.html';  // Change this URL to your desired destination.
            }
        }

        document.addEventListener('click', function() {
            clickCount++;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                clickCount = 0;
            }, 1500);  // 1.5 second (1500 milliseconds)
            redirectToPage();
        });


        setTimeout(function () {
            window.location.href = "../index.html"; 
          }, 120000);