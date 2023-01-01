import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from 'src/app/Models/product.interface';
import { EditAccountFormComponent } from '../../forms/edit-account-form/edit-account-form.component';

@Component({
  selector: 'app-edit-account-buttom',
  templateUrl: './edit-account-buttom.component.html',
  styleUrls: ['./edit-account-buttom.component.scss'],
})
export class EditAccountButtomComponent {
  @Output() infoEditAccount = new EventEmitter<any>();
  @Input() Account: Product | undefined;
  @Input() checkGMF: boolean = true;

  constructor(public dialog: MatDialog,
    private authJwt:JwtHelperService
    ) {}

  openDialog(): void {
    console.log(this.checkGMF);
    const dialogRef = this.dialog.open(EditAccountFormComponent, {
      data: {
        Account: this.Account,
        modifiedBy: this.authJwt.decodeToken(localStorage.getItem('token')||'')?.id,
        availableGMF: this.checkGMF,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoEditAccount.emit(result);
    });
  }
}
