import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from 'src/app/Models/product.interface';
import { User } from 'src/app/Models/user.interface';
import { NewAccountFormComponent } from '../../forms/new-account-form/new-account-form.component';

@Component({
  selector: 'app-new-account-buttom',
  templateUrl: './new-account-buttom.component.html',
  styleUrls: ['./new-account-buttom.component.scss'],
})
export class NewAccountButtomComponent {
  @Output() infoNewAccount = new EventEmitter<any>();
  @Input() ownerUser: User | undefined;
  @Input() thereIsGMF: boolean = true;

  constructor(
    public dialog: MatDialog,

    private authJwt: JwtHelperService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewAccountFormComponent, {
      data: {
        ownerUser: this.ownerUser,
        modifiedBy: this.authJwt.decodeToken(
          localStorage.getItem('token') || ''
        )?.id,
        availableGMF: this.thereIsGMF,
        height: '80%',
        minWidth: '40%',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoNewAccount.emit(result);
    });
  }
}
