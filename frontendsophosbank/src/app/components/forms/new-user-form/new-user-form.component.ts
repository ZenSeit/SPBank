import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDENTIFICATION_TYPES } from 'src/app/Information/constantsToApp';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
})
export class NewUserFormComponent {
  
  createUser: FormGroup = new FormGroup({});

  maxDate = new Date(new Date().getTime() - 568036800000);

  idTypeINF = IDENTIFICATION_TYPES

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.createUser = this.formBuilder.group({
      id: [
        {
          value: this.data.editUser ? this.data?.editUser?.id : '',
          disabled: false,
        },
      ],
      names: [
        {
          value: this.data.editUser ? this.data.editUser?.names : '',
          disabled: !this.data?.isEdit,
        },
        Validators.required,
      ],
      lastNames: [
        {
          value: this.data.editUser ? this.data?.editUser?.lastNames : '',
          disabled: !this.data?.isEdit,
        },
        Validators.required,
      ],
      email: [
        {
          value: this.data.editUser ? this.data?.editUser?.email : '',
          disabled: !this.data?.isEdit,
        },
        Validators.compose([Validators.required, Validators.email]),
      ],
      idType: [
        {
          value: this.data.editUser ? this.data?.editUser?.idType : '',
          disabled: false,
        },
        Validators.compose([Validators.required]),
      ],
      idNumber: [
        {
          value: this.data.editUser ? this.data?.editUser.idNumber : '',
          disabled: !this.data?.isEdit,
        },
        Validators.compose([Validators.required]),
      ],
      password: [
        {
          value: '',
          disabled: !this.data?.isEdit,
        },
        Validators.compose([Validators.required]),
      ],
      birthDate: [
        {
          value: this.data.editUser ? this.data?.editUser.birthDate : '',
          disabled: !this.data?.isEdit,
        },
        Validators.compose([Validators.required]),
      ],
      cellPhone: [
        {
          value: this.data.editUser ? this.data?.editUser.cellPhone : '',
          disabled: false,
        },
        Validators.compose([Validators.required]),
      ],
    });
  }

  get names() {
    return this.createUser.get('names');
  }

  get lastNames() {
    return this.createUser.get('lastNames');
  }

  get email() {
    return this.createUser.get('email');
  }
  get idType() {
    return this.createUser.get('email');
  }
  get idNumber() {
    return this.createUser.get('idNumber');
  }
  get password() {
    return this.createUser.get('password');
  }
  get birthDay() {
    return this.createUser.get('birthDate');
  }
  get cellPhone(){
    return this.createUser.get('cellPhone')
  }
}
