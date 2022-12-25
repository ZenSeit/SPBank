import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';
import { User } from 'src/app/Models/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() selectedAccount:Product | undefined=undefined


}
