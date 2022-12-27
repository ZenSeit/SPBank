import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent {

  transferTransaction: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TransferFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit(): void {
    this.transferTransaction = this.formBuilder.group({
      idAccount: [
        {
          value: this.data?.Account ? this.data?.Account.id : '',
          disabled: true,
        },
      ],
      transactionValue:[
        {
          value:'',
          disabled:false
        },
        Validators.compose([Validators.required])
      ],
      toAccount:[
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
    return this.transferTransaction.get('transactionValue')
  }

  get toAccount(){
    return this.transferTransaction.get('toAccount')
  }

}
