import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';
import { User } from 'src/app/Models/user.interface';
import { ACCOUNT_STATE } from 'src/app/Information/constantsToApp';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  
  @Input() selectedAccount: Product | undefined = undefined;
  @Input() prueba:Product[]=[]
  @Input() exeGMF:boolean=true;
  @Output() infoCredit = new EventEmitter<any>();
  @Output() infoDebit = new EventEmitter<any>();
  @Output() infoTransfer = new EventEmitter<any>();
  @Output() infoEditAccount = new EventEmitter<any>();

  acState=ACCOUNT_STATE

  ngOnInit(): void {
    console.log(this.prueba);
      console.log(this.exeGMF);
  }

  setInfoCredit(info: any) {
    this.infoCredit.emit(info);
  }

  setInfoDebit(info: any) {
    this.infoDebit.emit(info);
  }

  transferToAccount(info: any) {
    this.infoTransfer.emit(info);
  }

  setInfoEditAccount(info:any){
    this.infoEditAccount.emit(info)
  }

}
