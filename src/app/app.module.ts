import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { FeedPage } from '../pages/feed/feed';
import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDNsGvlekmFCU6-qb6zway7wypZIR8Fym4",
  authDomain: "feedly-a36e4.firebaseapp.com",
  databaseURL: "https://feedly-a36e4.firebaseio.com",
  projectId: "feedly-a36e4",
  storageBucket: "",
  messagingSenderId: "179123632235"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    FeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
