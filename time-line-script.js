// Set the specific starting date
const specificDate = new Date("2024-05-19T00:00:00"); // Replace with your desired date

function calculateElapsedTime() {
    const now = new Date(); // Current date and time


    let years = now.getFullYear() - specificDate.getFullYear();
    let months = now.getMonth() - specificDate.getMonth();
    let days = now.getDate() - specificDate.getDate();
    let hours = now.getHours() - specificDate.getHours();
    let minutes = now.getMinutes() - specificDate.getMinutes();
    let seconds = now.getSeconds() - specificDate.getSeconds();


    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {

        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("elapsed-year").textContent = `${years} Years...`;
    document.getElementById("elapsed-month").textContent  =`${months} Months...`;
    document.getElementById("elapsed-days").textContent = `${days} Days...`;
    document.getElementById("elapsed-hours").textContent = `${hours} Hours...`;
    document.getElementById("elapsed-minutes").textContent = `${minutes} Minutes...`;
    document.getElementById("elapsed-seconds").textContent = `${seconds} Seconds...`;
}

// Update the clock every second
setInterval(calculateElapsedTime, 1000);

// Initialize the clock
calculateElapsedTime();
