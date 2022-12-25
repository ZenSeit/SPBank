import { Product } from "./product.interface";

export interface Transaction{

    id?:number,
    transactionDate?:Date,
    transactiontType?:string,
    description?:string,
    transactionValue:number,
    statementType?:string,
    balance?:number,
    availableBalance?:number,
    statementOwner?:Product,

}