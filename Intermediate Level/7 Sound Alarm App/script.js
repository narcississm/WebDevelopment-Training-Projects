const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmButton = document.getElementById("setAlarm");
const statusText = document.getElementById("status");
const alarmSound = document.getElementById("alarmSound");

let alarmTimeout;

setAlarmButton.addEventListener("click", () => {
    const alarmTime = alarmTimeInput.value;
    if (!alarmTime) {
        statusText.textContent = "Lütfen geçerli bir saat seçin.";
        return;
    }

    const now = new Date();
    const alarmDate = new Date();

    const [hours, minutes] = alarmTime.split(":");
    alarmDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    if (alarmDate <= now) {
        // Eğer alarm zamanı geçmişse bir sonraki güne ayarla
        alarmDate.setDate(alarmDate.getDate() + 1);
    }

    const timeToAlarm = alarmDate - now;

    clearTimeout(alarmTimeout);

    alarmTimeout = setTimeout(() => {
        alarmSound.play();
        statusText.textContent = "Alarm çalıyor!";
    }, timeToAlarm);

    statusText.textContent = `Alarm ${alarmDate.toLocaleTimeString()} için kuruldu.`;
});