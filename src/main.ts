import { CashRegister } from "./cash-Register";
import { Consumer } from "./consumer";
import { Product } from "./product";
import { StaffMember } from "./staff-Member";

const products: Product[] = [
    new Product(100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43'),
    new Product(7, 'Bread', 'Angel', 'sdfsdf34frv34')
]

const cashiers: StaffMember[] = [
    new StaffMember('Cashier'),
    new StaffMember('Cashier')
]

const stands: CashRegister[] = [
    new CashRegister(cashiers[0]),
    new CashRegister(cashiers[1])
];


stands[0].changeWorker(cashiers[1]);
stands[1].changeWorker(cashiers[0]);

stands[0].startNewPurchase();

stands[0].addProduct(products[1]);
stands[0].addProduct(products[1]);
stands[0].addProduct(products[0]);

stands[0].startNewPurchase(); // ERROR!!! In the middle of another bill


const consumer = new Consumer(true);
const bill = stands[0].endPurchase(consumer);
console.log(bill) //114

