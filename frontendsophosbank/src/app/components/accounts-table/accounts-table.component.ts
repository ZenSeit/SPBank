import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';


@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent implements OnInit {

  @Input() accountsByUser:Product[] = [];
  @Output() idAccount = new EventEmitter<number>();

  displayedColumns:string[]=['Numero de cuenta','Tipo de cuenta','Modificado por']

  constructor(){}

  
  ngOnInit(): void {
  }

  selectRow(row:any){
    this.idAccount.emit(row)
  }




}
