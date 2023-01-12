import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { User } from 'src/app/Models/user.interface';
import { NewUserFormComponent } from '../../forms/new-user-form/new-user-form.component';

@Component({
  selector: 'app-new-user-button',
  templateUrl: './new-user-button.component.html',
  styleUrls: ['./new-user-button.component.scss'],
})
export class NewUserButtonComponent {
  @Output() infoForm = new EventEmitter<User>();
  @Input() isEdit: boolean = false;
  @Input() editUser: any;
  @Input() tittleButton: string ='Crear nuevo usuario';
  

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewUserFormComponent, {
      data: { isEdit: this.isEdit, editUser: this.editUser, tittle: this.tittleButton },
      height:'80%',
      minWidth:'30%'
    }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.infoForm.emit(result)
    });
  }
}
