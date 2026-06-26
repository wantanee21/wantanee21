// แสดงข้อความต้อนรับ

window.addEventListener("load", () => {
    console.log("ยินดีต้อนรับสู่เว็บไซต์ของฉัน");
});

// แสดงเวลาปัจจุบัน

function updateTime() {

    const now = new Date();

    const timeString = now.toLocaleTimeString("th-TH");

    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = "เวลาปัจจุบัน: " + timeString;
    }

}

setInterval(updateTime, 1000);
updateTime();

// เอฟเฟกต์คลิกที่ชื่อ

const title = document.querySelector("h1");

if (title) {

    title.addEventListener("click", () => {
        alert("ขอบคุณที่เข้าชมเว็บไซต์ของฉัน!");
    });

}
