import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/Models/product.interface';
import { User } from 'src/app/Models/user.interface';
import { NewAccountFormComponent } from '../../forms/new-account-form/new-account-form.component';

@Component({
  selector: 'app-new-account-buttom',
  templateUrl: './new-account-buttom.component.html',
  styleUrls: ['./new-account-buttom.component.scss']
})
export class NewAccountButtomComponent {

  @Output() infoNewAccount = new EventEmitter<any>();
  @Input() ownerUser:User | undefined
  @Input() thereIsGMF:boolean = true


  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(NewAccountFormComponent,
      {
        data:{
          ownerUser:this.ownerUser,
          modifiedBy: 1,
          availableGMF: this.thereIsGMF
        }
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoNewAccount.emit(result);
    });
  }

}
