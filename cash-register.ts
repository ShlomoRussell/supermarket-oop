import { StaffMember } from "./staff-member";

class CashRegister {
  id: number;
  startNewPurchase: Function;
  endPurchase: Function;
  addProduct: Function;
  changeWorker: Function;
  constructor(id: number) {
    this.id = id;
    this.startNewPurchase = () => " ERROR!!! No worker assigned";
    this.endPurchase = () => {};
    this.addProduct = () => {};
    this.changeWorker = (worker: StaffMember): StaffMember => {
      return worker;
    };
  }
}

export { CashRegister };
