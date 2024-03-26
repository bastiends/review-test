import BeverageFactory from './Factory/BeverageFactory.js';
import Coffee from "./Coffee.js";
import Tea from './Tea.js';

async function main() {
    const coffee1 = BeverageFactory.MakeBeverage('Coffee', true, true);
    const coffee2 = BeverageFactory.MakeBeverage('Coffee', true);
    const tea1 = BeverageFactory.MakeBeverage('Tea');

    const tea2 = BeverageFactory.makeBeverages([{
        type: 'Tea',
        'params': [true],
    }]);

    console.log('Making Coffee:');
    coffee1.prepareBeverage();

    console.log('\nMaking Coffee:');
    coffee2.prepareBeverage();

    console.log('\nMaking Tea:');
    tea1.prepareBeverage();

    console.log('\nMaking Tea:');
    tea2.prepareBeverage();

    console.log(`Ratio coffee/tea : ${Coffee.n / Tea.n}`);
}

main();
