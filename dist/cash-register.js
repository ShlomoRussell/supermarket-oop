"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashRegister = void 0;
class CashRegister {
    constructor(worker) {
        this.cashId = CashRegister.cashIdCounter++;
        this.worker = worker;
    }
    startNewPurchase() {
        if (!this.products) {
            this.products = [];
            return;
        }
        else
            throw Error("ERROR!!! In the middle of another bill");
    }
    endPurchase(a) {
        if (a.isClubMember === true) {
            let total = this.products.reduce((prev, curr) => {
                return prev + curr.price;
            }, 0);
            this.products = undefined;
            return total;
        }
    }
    addProduct(product) {
        this.products.push(product);
    }
    changeWorker(worker) {
        return worker;
    }
}
exports.CashRegister = CashRegister;
CashRegister.cashIdCounter = 1;
//# sourceMappingURL=cash-register.js.map