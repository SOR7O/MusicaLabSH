import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService} from '../services/firebase-service.service';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private firebaseSS: FirebaseServiceService,
    private afAth: AngularFireAuth
  ) { }

  ngOnInit(): void {

    
  }

}
