
export interface User {
    id?:number,
    names:string,
    lastNames:string,
    email:string,
    cellPhone?:string,
    rol:string,
    idType:string,
    idNumber:string,
    birthDate:Date,
    modifiedAt?:Date
}