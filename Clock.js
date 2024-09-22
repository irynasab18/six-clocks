const timezones = {
    ny: 'America/New_York',
    mi: 'Europe/Minsk',
    tb: 'Asia/Tbilisi',
    ma: 'Europe/Madrid',
    to: 'Asia/Tokyo',
    sa: 'Asia/Samarkand',
}

export class Model {
    constructor(clockView) {
        this.view = clockView;
        this.timezone = null;
        this.currentTime = null;
        this.canvasIntId = 0;
        this.svgIntId = 0;
        this.domIntId = 0;
    }

    startClock(tz) {
        this.timezone = timezones[tz];
        this.getCurrentTime();
        this.setHands();
    }

    stopClock(tz) {
        this.timezone = timezones[tz];
        this.intId = null
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
        const timeOptions = this.currentTime.split(':');
        const hour = timeOptions[0] % 12;
        const minute = timeOptions[1];
        const second = timeOptions[2];

        if (this.timezone === timezones.ny || this.timezone === timezones.mi) {
            //DOM
            const secondDeg = (second / 60) * 360;
            const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
            const hourDeg = (hour / 12) * 360 + (minute / 60) * 30;

            // if (this.domIntId) {
            //     clearInterval(this.domIntId);
            // }
            this.domIntId = setInterval(() => {
                this.view.updateClock(secondDeg, minuteDeg, hourDeg);

            }, 1000);
            //this.view.updateClock(secondDeg, minuteDeg, hourDeg);
        }
        if (this.timezone === timezones.tb || this.timezone === timezones.ma) {
            //SVG
            let hAngle = ((2 * Math.PI) / 12) * hour;
            let mAngle = ((2 * Math.PI) / 60) * minute;
            let sAngle = ((2 * Math.PI) / 60) * second;
            // if (this.svgIntId) {
            //     clearInterval(this.svgIntId);
            // }
            this.svgIntId = setInterval(() => {
                this.view.mainSVG(hAngle, mAngle, sAngle);

            }, 1000);
            //this.view.mainSVG(hAngle, mAngle, sAngle);
        }
        if (this.timezone === timezones.to || this.timezone === timezones.sa) {
            //CANVAS
            const hAngle = ((2 * Math.PI) / 12) * hour - Math.PI / 2;
            const mAngle = ((2 * Math.PI) / 60) * minute - Math.PI / 2;
            const sAngle = ((2 * Math.PI) / 60) * second - Math.PI / 2;

            // if (this.canvasIntId) {
            //     clearInterval(this.canvasIntId);
            // }
            this.canvasIntId = setInterval(() => {
                this.view.mainCanvas(hAngle, mAngle, sAngle);

            }, 1000);
        }
    }
}