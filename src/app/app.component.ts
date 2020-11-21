import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  state:boolean;
  title = 'MusicLab';
  constructor(
  ){}
  ngOnInit(){
    if(sessionStorage.length ===1){
      console.log('here');  
      this.state=true
    }

  }
  logout(){
    this.state=false;
    sessionStorage.removeItem('currentUser');  
  }
}
