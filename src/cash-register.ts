import { Consumer } from "./consumer";
import { Product } from "./product";
import { StaffMember } from "./staff-member";

export class CashRegister {
  cashId: number;
  private static cashIdCounter = 1;
  products: Product[];
  worker: StaffMember;
  constructor(worker: StaffMember) {
    this.cashId = CashRegister.cashIdCounter++;
    this.worker = worker;
  }

  startNewPurchase() {
    if (!this.products) {
      this.products = []
      return
    }
    else throw Error('ERROR!!! In the middle of another bill');
  }
  endPurchase(a: Consumer) {
    if (a.isClubMember === true) {
      let total: number = this.products.reduce((prev: number, curr: Product) => {
        return prev + curr.price;
      }, 0);
      this.products = null
      return total
    }
  }
  addProduct(product:Product) {
    this.products.push(product);
  }
  changeWorker(worker: StaffMember): StaffMember {
    return worker;
  }
}


