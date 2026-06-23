let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display =
    document.getElementById("display");

const lapList =
    document.getElementById("lapList");

function updateTime() {

    elapsedTime =
        Date.now() - startTime;

    let milliseconds =
        elapsedTime % 1000;

    let seconds =
        Math.floor(elapsedTime / 1000) % 60;

    let minutes =
        Math.floor(elapsedTime / 60000) % 60;

    let hours =
        Math.floor(elapsedTime / 3600000);

    display.innerHTML =

        `${String(hours).padStart(2, '0')}:` +

        `${String(minutes).padStart(2, '0')}:` +

        `${String(seconds).padStart(2, '0')}:` +

        `${String(milliseconds).padStart(3, '0')}`;
}

document.getElementById("start")
    .addEventListener("click", () => {

        if (!timerInterval) {

            startTime =
                Date.now() - elapsedTime;

            timerInterval =
                setInterval(updateTime, 10);
        }
    });

document.getElementById("pause")
    .addEventListener("click", () => {

        clearInterval(timerInterval);

        timerInterval = null;
    });

document.getElementById("reset")
    .addEventListener("click", () => {

        clearInterval(timerInterval);

        timerInterval = null;

        elapsedTime = 0;

        display.innerHTML =
            "00:00:00:000";

        lapList.innerHTML = "";
    });

document.getElementById("lap")
    .addEventListener("click", () => {

        if (elapsedTime > 0) {

            const lap =
                document.createElement("li");

            lap.textContent =
                display.innerHTML;

            lapList.appendChild(lap);
        }
    });