export default class beverage {
    prepareBeverage() {
        this.boilWater();
        this.brew();
        this.pour_in_cup();
        this.addCondiments();
    }

    boilWater() {
        console.log('Boiling water');
    }

    pour_in_cup() {
        console.log('Pouring into cup');
    }

    brew() {
        throw new Error('Brew method must be implemented by subclasses');
    }

    addCondiments() {
        throw new Error('AddCondiments method must be implemented by subclasses');
    }
}
