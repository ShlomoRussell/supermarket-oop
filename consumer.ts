import {IPerson}from "./iperson"
class Consumer implements IPerson {
  isClubMember: boolean;
  constructor(isClubMember: boolean) {
    this.isClubMember = isClubMember;
  }
}
export {Consumer}
