import{IPerson} from "./iperson"
class StaffMember extends IPerson{
    job: string;
    constructor(job: string) {
        super()
        this.job=job
    }
}


export {StaffMember}
