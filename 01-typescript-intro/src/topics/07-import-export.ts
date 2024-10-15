import {Product} from './06-function-destructuring'
import { taxCalculation } from './06-function-destructuring';


const shoppingCart : Product[]=[
{
    description: 'Noukia',
    price:100
},
{
    description:'Ipad',
    price: 150
}
];

const [total,taxtotal] =taxCalculation ({
    products :shoppingCart,
    tax: 0.15,
});



console.log('total',total);
console.log('Tax', taxtotal)