import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userAuth } from 'src/app/Models/userAuth.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() infoLogin = new EventEmitter<userAuth>();

  loginUser: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ){}


  ngOnInit(): void {
    this.loginUser = this.formBuilder.group({
      
      
      email: [
        {
          value: '',
          disabled: false,
        },
        Validators.compose([Validators.required, Validators.email]),
      ],
      password:[
        {
          value:'',
          disabled:false
        },
        Validators.compose([Validators.required])
      ]
    });
  }

  get email(){
    return this.loginUser.get('email')
  }

  get password(){
    return this.loginUser.get('password')
  }

  sendInfoLogin(){
    this.infoLogin.emit(this.loginUser.getRawValue())
  }

}
