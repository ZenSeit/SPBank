import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/Models/product.interface';
import { DebitFormComponent } from '../../forms/debit-form/debit-form.component';

@Component({
  selector: 'app-debit-account-buttom',
  templateUrl: './debit-account-buttom.component.html',
  styleUrls: ['./debit-account-buttom.component.scss']
})
export class DebitAccountButtomComponent {

  @Output() infoDebit = new EventEmitter<any>();
  @Input() Account:Product | undefined


  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    console.log(this.Account);
    const dialogRef = this.dialog.open(DebitFormComponent, {
      data: { Account: this.Account},
    }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoDebit.emit(result);
    });
  }

}
