export class Controller {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.btns = this.container.querySelector('.button-row');
    }

    init() {
        this.model.startClock(this.btns.id);
        this.btns.addEventListener('click', (event) => this.doOnClick(event));
    }

    doOnClick(event) {
        if (event.target.className === 'start') {
            this.model.startClock(event.currentTarget.id);
        }
        if (event.target.className === 'stop') {
            this.model.stopClock(event.currentTarget.id);
        }
    }

}
