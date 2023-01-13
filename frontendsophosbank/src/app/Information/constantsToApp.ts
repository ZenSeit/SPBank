export const ACCOUNT_TYPES=[
    {sendValue:'checking',showValue:'Corriente'},
    {sendValue:'saving',showValue:'Ahorros'}
]

export const EXCEPTION_GMF=[
    {sendValue:true, showValue:'Si'},
    {sendValue:false, showValue:'No'}
]

export const IDENTIFICATION_TYPES=[
    {sendValue:'CC', showValue:'Cedula'},
    {sendValue:'TI', showValue:'T.Extranjería'}
]

export const ACCOUNT_STATE=[
    {sendValue:2,showValue:'Activa'},
    {sendValue:1,showValue:'Inactiva'},
    {sendValue:0,showValue:'Cancelada'}
]

export const MSG_BACKEND=[
    {backValue:"Account doesn't exist!",showMsg:"La cuenta no existe"},
    {backValue:"User isn't in DB",showMsg:"El usuario no existe"},
    {backValue:"Password must be at least 4 or more characters",showMsg:"La contraseña debe contener al menos 4 caracteres"},
    {backValue:"User updated successfully",showMsg:"Usuario actualizado con exito"},
    {backValue:"There is a user registered with this id number",showMsg:"Existe un usuario registrado con el numero de documento suministrado"},
    {backValue:"You must be at least 18 years old to register in this Bank",showMsg:"Debes ser mayor de edad (18 años)"},
    {backValue:"Created",showMsg:"Creado!"},
    {backValue:"You need to cancel accounts associated to user.",showMsg:"Necesitas cancelar las cuentas asociadas al usuario"},
    {backValue:"User deleted",showMsg:"Usuario borrado"},
    {backValue:"User not exist",showMsg:"El usuario no existe"},
    {backValue:"User doesn't exist",showMsg:"El usuario no existe"},
    {backValue:"User have a GMF exception account already!",showMsg:"El usuario ya tiene una cuenta exenta"},
    {backValue:"Account not exist in our system",showMsg:"Cuenta no existe"},
    {backValue:"You cannot cancelled this account until its balance is 0!",showMsg:"No puedes cancelar la cuenta hasta que el saldo sea $0.0"},
    {backValue:"Account was updated",showMsg:"La cuenta fue actualizada"},
    {backValue:"Account was deleted from our system",showMsg:"La cuenta fue borrada"},
    {backValue:"Account doesn't exist! or is cancelled",showMsg:"La cuenta no existe o se encuentra cancelada"},
    {backValue:"Account from you want to execute this operation doesn't exist or is cancelled!",showMsg:"La cuenta desde donde quieres realizar la operacion se encuentra cancelada o no existe"},
    {backValue:"Target account does not exist or is cancelled",showMsg:"La cuenta no existe"},
    {backValue:"You cannot transfer to the same account",showMsg:"La cuenta destino no existe"},
    {backValue:"Transfer successful",showMsg:"Transferencia exitosa!"}
]

export function msg_Es(msgBack:any){
    setTimeout(()=> {
        let msgBackEs=MSG_BACKEND.find(msg=>msg.backValue.includes(msgBack))
        alert(msgBackEs?.showMsg || msgBack);
    }, 500);
    
}