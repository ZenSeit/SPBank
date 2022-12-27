import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/Models/product.interface';
import { TransferFormComponent } from '../../forms/transfer-form/transfer-form.component';

@Component({
  selector: 'app-transfer-account-buttom',
  templateUrl: './transfer-account-buttom.component.html',
  styleUrls: ['./transfer-account-buttom.component.scss']
})
export class TransferAccountButtomComponent {

  @Output() infoTransfer = new EventEmitter<any>();
  @Input() Account:Product | undefined


  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(TransferFormComponent, {
      data: { Account: this.Account},
    }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoTransfer.emit(result);
    });
  }

}
