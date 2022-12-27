import { Pipe, PipeTransform } from '@angular/core';
import { ACCOUNT_TYPES } from '../Information/constantsToApp';

@Pipe({
  name: 'accountTypeES'
})
export class AccountTypeESPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let acTypeES=ACCOUNT_TYPES.find(type=>type.sendValue==value)
    return acTypeES?.showValue;
  }

}
