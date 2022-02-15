"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cash_Register_1 = require("./cash-Register");
const consumer_1 = require("./consumer");
const product_1 = require("./product");
const staff_Member_1 = require("./staff-Member");
const products = [
    new product_1.Product(100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43'),
    new product_1.Product(7, 'Bread', 'Angel', 'sdfsdf34frv34')
];
const cashiers = [
    new staff_Member_1.StaffMember('Cashier'),
    new staff_Member_1.StaffMember('Cashier')
];
const stands = [
    new cash_Register_1.CashRegister(cashiers[0]),
    new cash_Register_1.CashRegister(cashiers[1])
];
stands[0].changeWorker(cashiers[1]);
stands[1].changeWorker(cashiers[0]);
stands[0].startNewPurchase();
stands[0].addProduct(products[1]);
stands[0].addProduct(products[1]);
stands[0].addProduct(products[0]);
//stands[0].startNewPurchase(); // ERROR!!! In the middle of another bill
const consumer = new consumer_1.Consumer(true);
const bill = stands[0].endPurchase(consumer);
console.log(bill); //114
//# sourceMappingURL=main.js.map