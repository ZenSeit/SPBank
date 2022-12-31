import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs)

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

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
import { TransferFormComponent } from './components/forms/transfer-form/transfer-form.component';
import { TransferAccountButtomComponent } from './components/modals/transfer-account-buttom/transfer-account-buttom.component';
import { NewAccountButtomComponent } from './components/modals/new-account-buttom/new-account-buttom.component';
import { NewAccountFormComponent } from './components/forms/new-account-form/new-account-form.component';
import { EditAccountButtomComponent } from './components/modals/edit-account-buttom/edit-account-buttom.component';
import { EditAccountFormComponent } from './components/forms/edit-account-form/edit-account-form.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccountTypeESPipe } from './pipes/account-type-es.pipe';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { MyInterceptorInterceptor } from './interceptors/my-interceptor.interceptor';


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
    DebitFormComponent,
    TransferFormComponent,
    TransferAccountButtomComponent,
    NewAccountButtomComponent,
    NewAccountFormComponent,
    EditAccountButtomComponent,
    EditAccountFormComponent,
    AccountTypeESPipe,
    LoginFormComponent
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
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
