(function() {
    let stop = true;
    let startTime;
    let stopTime = 0;
    let timer;

    const display = document.getElementById('display');
    const count = () => {
        const currentTime = new Date(Date.now() - startTime + stopTime);
        const m = String(currentTime.getMinutes()).padStart(2, '0');
        const s = String(currentTime.getSeconds()).padStart(2, '0');
        display.textContent = m + ":" + s;
        timer = setTimeout(count, 100);
    };

    const body = document.body;
    body.addEventListener('keypress', (e) => {
        if (e.key == " ") {
            if (stop) {
                startTime = Date.now();
                count();
            } else {
                clearTimeout(timer);
                stopTime += (Date.now() - startTime);
            }
            stop = !stop;
        } else if (e.key == "r") {
            clearTimeout(timer);
            stop = true;
            stopTime = 0;
            display.textContent = "00:00";
        }
    })
})()