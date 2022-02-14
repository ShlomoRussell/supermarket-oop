import { Consumer } from "./consumer";
import { Product } from "./product";
import { StaffMember } from "./staff-member";

export class CashRegister {
  cashId: number;
  private static cashIdCounter = 1;
  product: Product[] = [];
  worker: StaffMember;
  constructor(worker: StaffMember) {
    this.cashId = CashRegister.cashIdCounter++;
    this.worker = worker;
  }

  startNewPurchase() {
    if (this.product.length == 0) {
      return
    }
    else throw Error('ERROR!!! In the middle of another bill');
  }
  endPurchase(a: Consumer) {
    if (a.isClubMember === true) {
      let total: number = this.product.reduce((prev: number, curr: Product) => {
        return prev + curr.price;
      }, 0);
      this.product = []
      return total
    }
  }
  addProduct(product:Product) {
    this.product.push(product);
  }
  changeWorker(worker: StaffMember): StaffMember {
    return worker;
  }
}


