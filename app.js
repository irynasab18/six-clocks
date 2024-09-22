/*
Задание:
В папке Task8 создаем файл clocks-mvc.html.
Реализовать следующее (см. результат в конце) согласно концепции активного MVC:
1) Model — часы, класс Clock в файле Clock.js, могут идти (отображая актуальное время) либо стоять 
(отображая время на момент остановки);
2) View — реализовать три варианта:
· класс ClockViewDOM в файле ClockViewDOM.js для отображения часов средствами HTML/CSS/DOM;
· класс ClockkViewSVG в файле ClockViewSVG.js для отображения средствами SVG и
· класс ClockViwCanvas в файле ClockViewCanvas.js для отображения средствами Canvas;
3) Controller — реализовать вариант старта/остановки часов кнопками,
класс ClockControllerButtons в файле ClockControllerButtons.js.

Создать шесть объектов часов, для двух установить отображение в DOM,ещё для двух — в SVG,
и ещё для двух — в Canvas, расположить их на одной странице.
Каждые часы должны отображать текущее время в своём часовом поясе.
Все шесть часов должны независимо управляться своими кнопками «стоп» и
«старт» (при загрузке страницы часы должны идти; по нажатию кнопки
«стоп» стрелки должны останавливаться; по нажатию «старт» — менять
значение на текущее время и снова идти).
*/

import { DOMView } from './ClockViewDOM.js';
import { SVGView } from './ClockViewSVG.js';
import { CanvasView } from './ClockViewCanvas.js';
import { Model } from './Clock.js';
import { Controller } from './ClockControllerButtons.js'


class App {
    constructor(container) {
        this.container = container;
    }

    init() {
        const nyContainer = this.container.querySelector('#ny-clock');
        const miContainer = this.container.querySelector('#mi-clock');
        const tbContainer = this.container.querySelector('#tb-clock');
        const maContainer = this.container.querySelector('#ma-clock');
        const toContainer = this.container.querySelector('#to-clock');
        const saContainer = this.container.querySelector('#sa-clock');

        const domViewNY = new DOMView(nyContainer);
        const domViewMI = new DOMView(miContainer);
        const svgViewTB = new SVGView(tbContainer);
        const svgViewMA = new SVGView(maContainer);
        const canvasViewTO = new CanvasView(toContainer);
        const canvasViewSA = new CanvasView(saContainer);

        const domModelNY = new Model(domViewNY);
        const domModelMI = new Model(domViewMI);
        const svgModelTB = new Model(svgViewTB);
        const svgModelMA = new Model(svgViewMA);
        const canvasModelTO = new Model(canvasViewTO);
        const canvasModelSA = new Model(canvasViewSA);

        const domControllerNY = new Controller(nyContainer, domModelNY);
        const domControllerMI = new Controller(miContainer, domModelMI);
        const svgControllerTB = new Controller(tbContainer, svgModelTB);
        const svgControllerMA = new Controller(maContainer, svgModelMA);
        const canvasControllerTO = new Controller(toContainer, canvasModelTO);
        const canvasControllerSA = new Controller(saContainer, canvasModelSA);

        domControllerNY.init();
        domControllerMI.init();
        svgControllerTB.init();
        svgControllerMA.init();
        canvasControllerTO.init();
        canvasControllerSA.init();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.clocks');
    const app = new App(container);
    app.init();
});