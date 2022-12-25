import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/Models/transaction.interface';


@Component({
  selector: 'app-transactions-account-table',
  templateUrl: './transactions-account-table.component.html',
  styleUrls: ['./transactions-account-table.component.scss']
})
export class TransactionsAccountTableComponent {

  @Input() transactionByAccount:Transaction[]=[]

  displayedColumns:string[]=['description','transactionValue','balance','availableBalance','transactionDate']

}
