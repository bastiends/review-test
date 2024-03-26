import beverage from './Beverage.js';

export default class Tea extends beverage {
    static n = 0;

    constructor() {
        super();
    }

    brew() {
        return console.log('Steeping the tea');
    }

    addCondiments() {
        console.log('Adding Lemon');
    }
}
