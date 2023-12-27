self.addEventListener('message', function(e) {
    const start = Date.now();
    const end = new Date(2024, 0, 26);
    let days, hours, minutes;
    function timer() {
        diff = ((end - start) / 1000) | 0;
        d = (diff / (60 * 60 * 24)) | 0;
        h = ((diff - d * 24 * 60 * 60) / (60 * 60)) | 0;
        m = ((diff - d * 24 * 60 * 60 - h * 60 * 60) / 60) | 0;

				daysVal = d < 10 ? '0' + d : d;
        hoursVal = h < 10 ? '0' + h : h;
        minutesVal = m < 10 ? '0' + m : m;
        days = Math.trunc(daysVal);
        hours = Math.trunc(hoursVal);
        minutes = Math.trunc(minutesVal);
        self.postMessage(days, hours, minutes);
    };
    setInterval(timer, 1000);
}, false);
