export class Controller {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.btns = this.container.querySelector('.button-row');
    }

    init() {
        this.model.startClock(this.container.id.slice(0, 2));
        this.btns.addEventListener('click', (event) => this.doOnClick(event));
    }

    doOnClick(event) {
        if (event.target.className === 'start') {
            this.model.startClock(event.target.id.slice(0, 2));
        }
        if (event.target.className === 'stop') {
            this.model.stopClock(event.target.id.slice(0, 2));
        }
    }

}