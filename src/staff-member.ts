import{IPerson} from "./iperson"
export  class StaffMember implements IPerson {
  job: string;
  constructor(job: string) {
    this.job = job;
  }
}



