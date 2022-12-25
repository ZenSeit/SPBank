import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product.interface';
import { Transaction } from 'src/app/Models/transaction.interface';
import { User } from 'src/app/Models/user.interface';
import { AccountService } from 'src/app/services/Product/account.service';
import { TransactionService } from 'src/app/services/Statements/transaction.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  idUser: number = 0;

  userInfo: User | undefined = undefined;

  selectedAccount: Product | undefined = undefined;

  transactionsAccount: Transaction[] = [];

  userAccounts: Product[] = [];

  constructor(
    private routeA: ActivatedRoute,
    private userService: UserService,
    private accountService: AccountService,
    private transactionsService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeA.params.subscribe((params: any) => {
      if (params.id > 0) {
        this.idUser = params.id;
      } else {
        this.router.navigate(['home']);
      }
    });

    this.userService.getUserById(this.idUser).subscribe((obs) => {
      if (!obs) this.router.navigate(['home']);
      this.userInfo = obs;
    });

    this.accountService.getAccountsByUser(this.idUser).subscribe(
      (obs) => (this.userAccounts = obs)
      //(error: HttpErrorResponse) => this.router.navigate(['home'])
    );
  }

  getIdAccount(id: number) {
    this.accountService
      .getAccountById(id)
      .subscribe((obs) => (this.selectedAccount = obs));

    this.transactionsService
      .getAllStatementsByAccount(id)
      .subscribe((obs) => (this.transactionsAccount = obs));
  }
}
