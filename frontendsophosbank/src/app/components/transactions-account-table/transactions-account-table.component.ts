import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/Models/product.interface';
import { Transaction } from 'src/app/Models/transaction.interface';


@Component({
  selector: 'app-transactions-account-table',
  templateUrl: './transactions-account-table.component.html',
  styleUrls: ['./transactions-account-table.component.scss']
})
export class TransactionsAccountTableComponent{

  @Input() transactionByAccount:Transaction[]=[]
  @Input() accountSelected:Product | undefined;

  constructor(){}

  displayedColumns:string[]=['description','transactionValue','balance','availableBalance','transactionDate']

  dataSource = new MatTableDataSource<Transaction>(this.transactionByAccount);


}
