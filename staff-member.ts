import{IPerson} from "./iperson"
class StaffMember implements IPerson{
    job: string;
    constructor(job: string) {
        this.job=job
    }
}


export {StaffMember}
