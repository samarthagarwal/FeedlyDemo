import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  text: string = "";
  posts: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.getPosts();
  }

  getPosts(){
    this.posts = [];
    firebase.firestore().collection("posts").orderBy("created", "desc").get().then((docs)=> {
      docs.forEach((doc) => {
        // let d = doc.data();
        // let timestamp: firebase.firestore.Timestamp = doc.data().created;
        // d.created = timestamp.toDate();
        this.posts.push(doc.data());
      })
      console.log(this.posts)
    })
  }

  post(){
    firebase.firestore().collection("posts").add({
      text: this.text,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      owner_email: this.navParams.get("user").email,
      owner_name: this.navParams.get("user").name
    }).then(() => {
      console.log("Posted successfully!");
      this.getPosts();
      this.text = "";
    })
  }

}
