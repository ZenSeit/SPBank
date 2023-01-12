import { Pipe, PipeTransform } from '@angular/core';
import { ACCOUNT_STATE } from '../Information/constantsToApp';


@Pipe({
  name: 'accountState'
})
export class AccountStatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let acState=ACCOUNT_STATE.find(states=>states.sendValue==value)
    return acState?.showValue;
  }

}
