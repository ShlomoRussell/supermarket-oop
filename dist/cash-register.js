"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashRegister = void 0;
class CashRegister {
    constructor(worker) {
        this.cashId = CashRegister.cashIdCounter++;
        this.worker = worker;
        this.product = [];
    }
    startNewPurchase() { }
    endPurchase(a) {
        if (a.isClubMember === true) {
            return this.product.forEach((a, b) => {
                return a.price + a[b + 1].price;
            });
        }
    }
    addProduct(product) {
        this.product.push(product);
    }
    changeWorker(worker) {
        return worker;
    }
}
exports.CashRegister = CashRegister;
CashRegister.cashIdCounter = 0;
