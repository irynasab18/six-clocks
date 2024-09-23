export class CanvasView {
    constructor(container) {
        this.container = container;
        this.canvas = null;
        this.ctx = null;
        this.mainX = 125;
        this.mainY = 125;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.mainR = 125;
        this.mainColor = '#c1cce8';
        this.smallX = null;
        this.smallY = null;
        this.angle = null;
        this.smallR = 15;
        this.numItems = 12;
        this.placementR = 105;
        this.hours = ['', 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3];
        this.textShiftY = 4;
        this.numColor = '#2a385d';
        this.digStyle = 'white';
        this.digTextAlign = 'center';
        this.digFont = '15px serif';
        this.hWidth = 9;
        this.hLength = 75;
        this.handsColor = '#081024';
        this.lineCap = 'round';
        this.mWidth = 5;
        this.mLength = 100;
        this.sWidth = 3;
        this.sLength = 115;
        this.init();
    }

    init() {
        this.canvas = this.container.querySelector('.canvas-clock');
        this.ctx = this.canvas.getContext('2d');
    }

    update(secondDeg, minuteDeg, hourDeg, hAngle, mAngle, sAngle) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawClock();
        this.drawHands(hAngle, mAngle, sAngle);
    }

    drawClock() {
        //MAIN CIRCLE
        this.ctx.fillStyle = this.mainColor;
        this.ctx.beginPath();
        this.ctx.arc(this.mainX, this.mainY, this.mainR, this.startAngle, this.endAngle);
        this.ctx.fill();

        //DIGITS CIRCLES WITH HOURS
        for (let i = 1; i <= this.numItems; i++) {
            this.angle = (i / this.numItems) * 2 * Math.PI;
            this.smallX = this.mainX + this.placementR * Math.cos(this.angle);
            this.smallY = this.mainY + this.placementR * Math.sin(this.angle);

            this.ctx.fillStyle = this.numColor;
            this.ctx.beginPath();
            this.ctx.arc(this.smallX, this.smallY, this.smallR, this.startAngle, this.endAngle);
            this.ctx.fill();

            this.ctx.fillStyle = this.digStyle;
            this.ctx.textAlign = this.digTextAlign;
            this.ctx.font = this.digFont;
            this.ctx.fillText(this.hours[i], this.smallX, this.smallY + this.textShiftY);
        }
    }

    drawHands(hAngle, mAngle, sAngle) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.handsColor;
        this.ctx.lineCap = this.lineCap;
        this.ctx.lineWidth = this.hWidth;
        this.ctx.moveTo(this.mainX, this.mainY);
        this.ctx.lineTo(
            this.mainX + this.hLength * Math.cos(hAngle - Math.PI / 2),
            this.mainY + this.hLength * Math.sin(hAngle - Math.PI / 2)
        );
        this.ctx.stroke();


        this.ctx.beginPath();
        this.ctx.lineWidth = this.mWidth;
        this.ctx.moveTo(this.mainX, this.mainY);
        this.ctx.lineTo(
            this.mainX + this.mLength * Math.cos(mAngle - Math.PI / 2),
            this.mainY + this.mLength * Math.sin(mAngle - Math.PI / 2)
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#d63133';
        this.ctx.lineWidth = this.sWidth;
        this.ctx.moveTo(this.mainX, this.mainY);
        this.ctx.lineTo(
            this.mainX + this.sLength * Math.cos(sAngle - Math.PI / 2),
            this.mainY + this.sLength * Math.sin(sAngle - Math.PI / 2)
        );
        this.ctx.stroke();
    }
}

