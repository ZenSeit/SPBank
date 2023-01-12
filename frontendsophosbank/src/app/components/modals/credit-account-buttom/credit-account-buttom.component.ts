import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/Models/product.interface';
import { DepositFormComponent } from '../../forms/deposit-form/deposit-form.component';

@Component({
  selector: 'app-credit-account-buttom',
  templateUrl: './credit-account-buttom.component.html',
  styleUrls: ['./credit-account-buttom.component.scss']
})
export class CreditAccountButtomComponent {

  @Output() infoCredit = new EventEmitter<any>();
  @Input() Account:Product | undefined


  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    console.log(this.Account);
    const dialogRef = this.dialog.open(DepositFormComponent, {
      data: { Account: this.Account},
      height:'40%',
      minWidth:'30%'
    }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoCredit.emit(result);
    });
  }

}
