export class SVGView {
    constructor(container) {
        this.container = container;
        this.ns = 'http://www.w3.org/2000/svg';
        this.svg = null;
        this.svgWidth = 300;
        this.svgHeight = 270;
        this.mainR = 125;
        this.mainCx = 125;
        this.mainCy = 125;
        this.smallR = 15;
        this.placementR = 105;
        this.numItems = 12;
        this.hours = ['', 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];
        this.mainCircle = null;
        this.hourHand = null;
        this.hourStroke = 9;
        this.minuteStroke = 5;
        this.secondStroke = 3
        this.minuteHand = null;
        this.secondHand = null;
        this.hLength = 75;
        this.handsInitPosition = 125;
        this.mLength = 100;
        this.sLength = 115;

        this.init();
    }

    init() {
        this.svg = document.createElementNS(this.ns, 'svg');
        console.log(this.svg)
        this.svg.setAttribute('width', this.svgWidth);
        this.svg.setAttribute('height', this.svgHeight);
        this.container.append(this.svg);
        this.drawClock();
    }

    mainSVG(hAngle, mAngle, sAngle) {
        this.drawHands(hAngle, mAngle, sAngle);
        console.log('svg ', hAngle, mAngle, sAngle)
    }

    drawClock() {
        this.mainCircle = document.createElementNS(this.ns, 'circle');
        this.mainCircle.classList.add('main-circle');
        this.mainCircle.setAttribute('r', this.mainR);
        this.mainCircle.setAttribute('cx', this.mainCx);
        this.mainCircle.setAttribute('cy', this.mainCy);
        this.svg.append(this.mainCircle);

        for (let i = 1; i <= this.numItems; i++) {
            const angle = (i / this.numItems) * 2 * Math.PI;
            const x = this.mainCx + this.placementR * Math.cos(angle);
            const y = this.mainCy + this.placementR * Math.sin(angle);

            const smallCircle = document.createElementNS(this.ns, 'circle');
            smallCircle.setAttribute('cx', x);
            smallCircle.setAttribute('cy', y);
            smallCircle.setAttribute('r', this.smallR);
            smallCircle.setAttribute('innerHTML', i);
            smallCircle.classList.add('digits-circle');

            const digit = document.createElementNS(this.ns, 'text');
            digit.setAttribute('x', x);
            digit.setAttribute('y', y + 8);
            digit.setAttribute('text-anchor', 'middle');
            digit.classList.add('nums-style');
            digit.textContent = this.hours[i];

            this.svg.append(smallCircle);
            this.svg.append(digit);
        }
    }

    drawHands(hAngle, mAngle, sAngle) {
        this.hourHand = document.createElementNS(this.ns, 'line');
        let hx2 = this.handsInitPosition + this.hLength * Math.cos(hAngle - Math.PI / 2);
        let hy2 = this.handsInitPosition + this.hLength * Math.sin(hAngle - Math.PI / 2);
        this.hourHand.setAttribute('x1', this.handsInitPosition);
        this.hourHand.setAttribute('x2', hx2);
        this.hourHand.setAttribute('y1', this.handsInitPosition);
        this.hourHand.setAttribute('y2', hy2);
        this.hourHand.classList.add('hands-color');
        this.hourHand.setAttribute('stroke-width', this.hourStroke);
        this.svg.append(this.hourHand);

        this.minuteHand = document.createElementNS(this.ns, 'line');
        let mx2 = this.handsInitPosition + this.mLength * Math.cos(mAngle - Math.PI / 2);
        let my2 = this.handsInitPosition + this.mLength * Math.sin(mAngle - Math.PI / 2);
        this.minuteHand.setAttribute('x1', this.handsInitPosition);
        this.minuteHand.setAttribute('x2', mx2);
        this.minuteHand.setAttribute('y1', this.handsInitPosition);
        this.minuteHand.setAttribute('y2', my2);
        this.minuteHand.classList.add('hands-color');
        this.minuteHand.setAttribute('stroke-width', this.minuteStroke);
        this.svg.append(this.minuteHand);

        this.secondHand = document.createElementNS(this.ns, 'line');
        let sx2 = this.handsInitPosition + this.sLength * Math.cos(sAngle - Math.PI / 2);
        let sy2 = this.handsInitPosition + this.sLength * Math.sin(sAngle - Math.PI / 2);
        this.secondHand.setAttribute('x1', this.handsInitPosition);
        this.secondHand.setAttribute('x2', sx2);
        this.secondHand.setAttribute('y1', this.handsInitPosition);
        this.secondHand.setAttribute('y2', sy2);
        this.secondHand.classList.add('sec-color');
        this.secondHand.setAttribute('stroke-width', this.secondStroke);
        this.svg.append(this.secondHand);
    }
}






// function clockTick() {
//     let clockSecond = second;
//     let clockMinute = minute;
//     let clockHour = hour;

//     //Seconds tick
//     let secondsId = setInterval(() => {
//         sAngle = ((2 * Math.PI) / 60) * clockSecond;
//         sx2 = handsInitPosition + sLength * Math.cos(sAngle - Math.PI / 2);
//         sy2 = handsInitPosition + sLength * Math.sin(sAngle - Math.PI / 2);
//         secondHand.setAttribute('x2', sx2);
//         secondHand.setAttribute('y2', sy2);
//         clockSecond++;
//     }, 1000);

//     //Minutes tick
//     let minutesId = setInterval(() => {
//         mAngle = ((2 * Math.PI) / 60) * clockMinute;
//         mx2 = handsInitPosition + mLength * Math.cos(mAngle - Math.PI / 2);
//         my2 = handsInitPosition + mLength * Math.sin(mAngle - Math.PI / 2);
//         minuteHand.setAttribute('x2', mx2);
//         minuteHand.setAttribute('y2', my2);
//         clockMinute++;
//     }, 1000 * 60);

//     //Hours tick
//     let hoursId = setInterval(() => {
//         hAngle = ((2 * Math.PI) / 12) * clockHour;
//         hx2 = handsInitPosition + hLength * Math.cos(hAngle - Math.PI / 2);
//         hy2 = handsInitPosition + hLength * Math.sin(hAngle - Math.PI / 2);
//         hourHand.setAttribute('x2', hx2);
//         hourHand.setAttribute('y2', hy2);
//         clockHour++;
//     }, 1000 * 60 * 60);
// }


// clockTick();