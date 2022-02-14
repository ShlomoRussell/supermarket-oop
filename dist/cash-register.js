"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashRegister = void 0;
class CashRegister {
    constructor(worker) {
        this.product = [];
        this.cashId = CashRegister.cashIdCounter++;
        this.worker = worker;
    }
    startNewPurchase() {
        if (this.product.length == 0) {
            return;
        }
        else
            throw Error('ERROR!!! In the middle of another bill');
    }
    endPurchase(a) {
        if (a.isClubMember === true) {
            let total = this.product.reduce((prev, curr) => {
                return prev + curr.price;
            }, 0);
            this.product = [];
            return total;
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
CashRegister.cashIdCounter = 1;
