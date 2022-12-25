import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';
import { User } from 'src/app/Models/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() selectedAccount:Product | undefined=undefined;
  @Output() infoCredit=new EventEmitter<any>();
  @Output() infoDebit=new EventEmitter<any>();

  setInfoCredit(info:any){
    this.infoCredit.emit(info);
  }

  setInfoDebit(info:any){
    this.infoDebit.emit(info)
  }


}
