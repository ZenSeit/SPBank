import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ACCOUNT_TYPES } from 'src/app/Information/constantsToApp';
import { EXCEPTION_GMF } from 'src/app/Information/constantsToApp';

@Component({
  selector: 'app-new-account-form',
  templateUrl: './new-account-form.component.html',
  styleUrls: ['./new-account-form.component.scss']
})
export class NewAccountFormComponent {

  acTypes=ACCOUNT_TYPES

  exGMF=EXCEPTION_GMF

  createAccount: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewAccountFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data?.availableGMF);
    this.createAccount = this.formBuilder.group({
      accountType: [
        {
          value: '',
          disabled: false
        },
        Validators.required,
      ],
      state: [
        {
          value: 2,
          disabled: false,
        }
      ],
      balance: [
        {
          value: 0,
          disabled: false,
        },
        Validators.compose([Validators.required]),
      ],
      exceptionGMF: [
        {
          value: '',
          disabled: this.data?.availableGMF,
        }
      ],
      owner: [
        {
          value: this.data?.ownerUser,
          disabled: true,
        }
      ],
      modifiedBy: [
        {
          value: {id:this.data.modifiedBy},
          disabled: true,
        }
      ]
    });
  }

  get accountType() {
    return this.createAccount.get('accountType');
  }

  get state() {
    return this.createAccount.get('state');
  }

  get balance() {
    return this.createAccount.get('balance');
  }
  get exceptionGMF() {
    return this.createAccount.get('exceptionGMF');
  }
  get owner() {
    return this.createAccount.get('owner');
  }
  get modifiedBy() {
    return this.createAccount.get('modifiedBy');
  }

}


