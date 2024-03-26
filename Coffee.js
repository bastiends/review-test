import beverage from './Beverage.js';

export default class Coffee extends beverage {

    static n = 0;

    constructor(withSugar = false, withMilk = false) {
        super();
        this.withSugar = withSugar;
        this.withMilk = withMilk;
        Coffee.n++;
    }

    brew() {
        console.log('Dripping Coffee through filter');
    }

    addCondiments() {
            if (this.withSugar && this.withMilk) {
                console.log('Adding Sugar and Milk');
            } else if (this.withSugar) {
                console.log('Adding Sugar');
            } else if (this.withMilk) {
            console.log('Adding Milk');
        }
    }
}
