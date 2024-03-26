import Coffee from './../Coffee.js';
import Tea from './../Tea.js';

const classes = {
    Coffee: Coffee,
    Tea,
};

export default class BeverageFactory {

    static MakeBeverage(type, ...params) {
        return new classes[type](...params);
    }

    static makeBeverages(beverages) {
        for (const beverage of beverages) {
            return BeverageFactory.MakeBeverage(beverage.type, ...beverage.params);
        }
    }
}
