import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EXCEPTION_GMF } from 'src/app/Information/constantsToApp';
import { ACCOUNT_STATE } from 'src/app/Information/constantsToApp';

@Component({
  selector: 'app-edit-account-form',
  templateUrl: './edit-account-form.component.html',
  styleUrls: ['./edit-account-form.component.scss']
})
export class EditAccountFormComponent {

  exGMF=EXCEPTION_GMF
  stateAccount=ACCOUNT_STATE

  editedAccount: FormGroup = new FormGroup({});


  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditAccountFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.editedAccount = this.formBuilder.group({
      id: [
        {
          value: this.data?.Account.id,
          disabled: true
        }
      ],
      accountType: [
        {
          value: this.data?.Account.accountType,
          disabled: true
        }
      ],
      state: [
        {
          value: this.data?.Account.state,
          disabled: false,
        }
      ],
      exceptionGMF: [
        {
          value: this.data.Account?.exceptionGMF,
          disabled: this.data?.availableGMF ? this.data?.Account.exceptionGMF ? false : true : false,
        }
      ],
      owner: [
        {
          value: this.data?.Account.owner,
          disabled: true,
        }
      ],
      modifiedBy: [
        {
          value: {id:this.data?.modifiedBy},
          disabled: true,
        }
      ]
    });
  }

  get accountType() {
    return this.editedAccount.get('accountType');
  }

  get state() {
    return this.editedAccount.get('state');
  }

  get balance() {
    return this.editedAccount.get('balance');
  }
  get exceptionGMF() {
    return this.editedAccount.get('exceptionGMF');
  }
  get owner() {
    return this.editedAccount.get('owner');
  }
  get modifiedBy() {
    return this.editedAccount.get('modifiedBy');
  }

}
