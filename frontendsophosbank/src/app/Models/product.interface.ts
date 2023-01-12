import { User } from "./user.interface";

export interface Product {
    
    id?:number,
    accountType: string,
    accountNumber?:string,
    owner:User,
    state:number,
    balance:number,
    availableBalance?:number,
    exceptionGMF:boolean,
    modifiedAt?:Date,
    createdAt?:Date,
    modifiedBy:User

}