"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cash_Register_1 = require("../Cash-Register");
const Product_1 = require("../Product");
const Staff_Member_1 = require("../Staff-Member");
const products = [
    new Product_1.Product(100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43'),
    new Product_1.Product(7, 'Bread', 'Angel', 'sdfsdf34frv34')
];
const cashiers = [
    new Staff_Member_1.StaffMember('Cashier'),
    new Staff_Member_1.StaffMember('Cashier')
];
const stands = [
    new Cash_Register_1.CashRegister(cashiers[0]),
    new Cash_Register_1.CashRegister(cashiers[1])
];
test('CashRegister functions test', () => {
    expect(() => stands[0].startNewPurchase()).toThrow('ERROR!!! In the middle of another bill');
});
/*
stands[0].changeWorker(cashiers[1]);
stands[1].changeWorker(cashiers[0]);

stands[0].startNewPurchase();

stands[0].addProduct(products[1]);
stands[0].addProduct(products[1]);
stands[0].addProduct(products[0]);


const consumer = new Consumer(true);
const bill = stands[0].endPurchase(consumer);
console.log(bill) //114


*/
