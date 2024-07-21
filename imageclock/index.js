

function updateClk() {
    
    const now = new Date();
    let hours = now.getHours();
    const meridien = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const mins = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${mins}:${sec} ${meridien}`;

    document.getElementById("clock").textContent = timeString;

    setInterval(() => updateClk(), 1000);

}


updateClk();