import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email: string = "";
  name: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
    this.navCtrl.pop();
  }

  signup(){

    firebase.firestore().collection("users").doc(this.email).get().then((doc) => {
      if(doc.exists){
        alert("Email already in use");
      } else {
        firebase.firestore().collection("users").doc(this.email).set({
          email: this.email,
          password: this.password,
          name: this.name
        }).then(() => {
          console.log("Saved to Firestore");
          alert("Account Created")
          this.navCtrl.pop();
        })
      }
    })

    

  }

}
