import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { UserTableComponent } from './components/user-table/user-table.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { AccountsTableComponent } from './components/accounts-table/accounts-table.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TransactionsAccountTableComponent } from './components/transactions-account-table/transactions-account-table.component';
import { NewUserButtonComponent } from './components/modals/new-user-button/new-user-button.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NewUserFormComponent } from './components/forms/new-user-form/new-user-form.component';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CreditAccountButtomComponent } from './components/modals/credit-account-buttom/credit-account-buttom.component';
import { DepositFormComponent } from './components/forms/deposit-form/deposit-form.component';
import { DebitAccountButtomComponent } from './components/modals/debit-account-buttom/debit-account-buttom.component';
import { DebitFormComponent } from './components/forms/debit-form/debit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    UsersPageComponent,
    UserTableComponent,
    UserPageComponent,
    AccountsTableComponent,
    UserCardComponent,
    TransactionsAccountTableComponent,
    NewUserButtonComponent,
    NewUserFormComponent,
    CreditAccountButtomComponent,
    DepositFormComponent,
    DebitAccountButtomComponent,
    DebitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
