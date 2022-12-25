import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-debit-form',
  templateUrl: './debit-form.component.html',
  styleUrls: ['./debit-form.component.scss']
})
export class DebitFormComponent implements OnInit {

  debitTransaction: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DebitFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit(): void {
    this.debitTransaction = this.formBuilder.group({
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
    return this.debitTransaction.get('transactionValue')
  }

}
