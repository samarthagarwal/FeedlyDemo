import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { FeedPage } from '../feed/feed';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController) {

  }

  gotoSignupPage(){
    this.navCtrl.push(SignupPage);
  }

  login(){

    firebase.firestore().collection("users").doc(this.email)
    .get().then((doc) => {
      if(doc.exists){
        if(doc.data().password == this.password){
          this.navCtrl.setRoot(FeedPage, {user: doc.data()})
        } else {
          alert("Password does not match");
        }
      } else {
        alert("No account with this email found");
      }
    })

  }

}
