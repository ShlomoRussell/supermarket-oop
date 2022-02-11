import { Consumer } from "./consumer";
import { Product } from "./product";
import { StaffMember } from "./staff-member";

class CashRegister {
  cashId: number;
  static cashIdCounter = 0;
  product: Product[];
  worker: StaffMember;
  constructor(worker: StaffMember) {
    this.cashId = CashRegister.cashIdCounter++;
    this.worker = worker;
    this.product=[]
  }

  startNewPurchase() {
    
  }
  endPurchase(a: Consumer) {
    if (a.isClubMember === true) {
      return this.product.forEach((a,b) => {
        return a.price+a[b+1].price
      })
    }
  }
  addProduct(product:Product) {
    this.product.push(product)
  }
  changeWorker(worker: StaffMember): StaffMember {
    return worker;
  }
}

export { CashRegister };
