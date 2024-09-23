export class Model {
    constructor(clockView) {
        this.view = clockView;
        this.timezone = null;
        this.currentTime = null;
        this.intervalId = 0;
    }

    startClock(tz) {
        this.timezone = tz;
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            this.setHands();
        }, 1000);

    }

    stopClock() {
        clearInterval(this.intervalId);
    }

    getCurrentTime() {
        this.currentTime = new Date().toLocaleTimeString('ru-RU', {
            timeZone: this.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    setHands() {
        this.getCurrentTime();

        const timeOptions = this.currentTime.split(':');
        const hour = timeOptions[0] % 12;
        const minute = timeOptions[1];
        const second = timeOptions[2];

        //DOM
        const secondDeg = (second / 60) * 360;
        const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
        const hourDeg = (hour / 12) * 360 + (minute / 60) * 30;

        //SVG, CANVAS
        let h1Angle = ((2 * Math.PI) / 12) * hour;
        let m1Angle = ((2 * Math.PI) / 60) * minute;
        let s1Angle = ((2 * Math.PI) / 60) * second;

        this.view.update(secondDeg, minuteDeg, hourDeg, h1Angle, m1Angle, s1Angle);
    }
}
