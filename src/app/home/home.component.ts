import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public us:UserService){}

  ngOnInit(): void {
  }

}
