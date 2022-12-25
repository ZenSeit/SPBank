import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.scss']
})
export class DepositFormComponent implements OnInit {

  depositTransaction: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DepositFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit(): void {
    this.depositTransaction = this.formBuilder.group({
      idAccount: [
        {
          value: this.data?.Account ? this.data?.Account.id : '',
          disabled: false,
        },
      ],
      transactionValue:[
        {
          value:'',
          disabled:false
        },
        Validators.compose([Validators.required])
      ]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get transactionValue(){
    return this.depositTransaction.get('transactionValue')
  }

}
