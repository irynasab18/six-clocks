export class DOMView {
    constructor(container) {
        this.container = container;
        this.clockDiv = this.container.querySelector('.clock');
        this.mainR = 125;
        this.placementR = 105;
        this.clockCenterX = this.mainR;
        this.clockCenterY = this.mainR;
        this.numCount = 12;
        this.numSize = 30;
        this.hours = ['', 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];
        this.numberElem = null;
        this.hourHand = null;
        this.minuteHand = null;
        this.secondHand = null;
        this.init();
    }

    init() {
        this.createClockNumbers();
        this.createClockHands();
    }

    mainDOM(secondDeg, minuteDeg, hourDeg) {
        this.updateClock(secondDeg, minuteDeg, hourDeg);
    }

    createClockNumbers() {
        for (let i = 1; i <= this.numCount; i++) {
            const angle = (i * 360 / this.numCount) * (Math.PI / 180);
            const numberX = this.clockCenterX + this.placementR * Math.cos(angle) - this.numSize / 2;
            const numberY = this.clockCenterY + this.placementR * Math.sin(angle) - this.numSize / 2;

            this.numberElem = document.createElement('div');
            this.numberElem.classList.add('number');
            this.numberElem.classList.add('digits');
            this.numberElem.style.left = `${numberX}px`;
            this.numberElem.style.top = `${numberY}px`;
            this.numberElem.innerText = this.hours[i];

            this.clockDiv.append(this.numberElem);
        }
    }

    createClockHands() {
        this.hourHand = document.createElement('div');
        this.hourHand.classList.add('hand');
        this.hourHand.classList.add('hour-hand');
        this.hourHand.id = 'hour-hand';

        this.minuteHand = document.createElement('div');
        this.minuteHand.classList.add('hand');
        this.minuteHand.classList.add('minute-hand');
        this.minuteHand.id = 'min-hand';

        this.secondHand = document.createElement('div');
        this.secondHand.classList.add('hand');
        this.secondHand.classList.add('second-hand');
        this.secondHand.id = 'sec-hand';
        this.clockDiv.append(this.hourHand);
        this.clockDiv.append(this.minuteHand);
        this.clockDiv.append(this.secondHand);
    }


    updateClock(secondDeg, minuteDeg, hourDeg) {
        this.secondHand.style.transform = `rotate(${secondDeg}deg)`;
        this.minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        this.hourHand.style.transform = `rotate(${hourDeg}deg)`;
        console.log('dom ', secondDeg, minuteDeg, hourDeg)
    }
}

