import {IPerson}from "./iperson"
class Consumer extends IPerson{
    existing:boolean
    constructor(existing: boolean) {
        super()
        this.existing = existing
        
    }
}
export {Consumer}
