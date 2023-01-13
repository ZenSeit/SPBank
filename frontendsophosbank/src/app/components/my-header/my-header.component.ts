import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from 'src/app/services/Token/token.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {

  constructor(private authJwt:JwtHelperService, private router:Router,private tokenService:TokenService){}

  myToken:boolean=false;
  userName:string=''

  ngOnInit(): void {
    this.tokenService.setToken(localStorage.getItem('token') || '')
    this.tokenService.getToken().subscribe(tk=>{
      this.myToken=this.authJwt.isTokenExpired(tk)
      if(!this.myToken){
        this.userName=this.authJwt.decodeToken(tk).name
      }
    })
  }

  goHome(){
    this.router.navigate(['/home'])
  }

 
  cleanSession(){
    this.tokenService.closeSession()
    this.tokenService.setToken(localStorage.getItem('token') || '')
    this.tokenService.getToken().subscribe(tk=>this.myToken=this.authJwt.isTokenExpired(tk))
    this.router.navigate(['/login'])
  }

}
