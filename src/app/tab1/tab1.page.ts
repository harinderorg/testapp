import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private firebaseAuthentication: FirebaseAuthentication, private twitter: TwitterConnect) {}


  login(){
  //   this.firebaseAuthentication.signInWithTwitter('803837273708101632-3JoY83cLxaYj3whBWLBbZWOy4eSOsuq', 'hkVl70O8nuGVMp7vx7Eyi4ce1MuVg3k9NBe6k8aqfj0x8')
  // .then((res: any) => console.log(res))
  // .catch((error: any) => console.error(error));

  this.twitter.login().then(onSuccess, onError);

  function onSuccess(response) {
    console.log(response);
  
    // Will console log something like:
    // {
    //   userName: 'myuser',
    //   userId: '12358102',
    //   secret: 'tokenSecret'
    //   token: 'accessTokenHere'
    // }
  }

  function onError(response) {
    console.log(response);
  
    // Will console log something like:
    // {
    //   userName: 'myuser',
    //   userId: '12358102',
    //   secret: 'tokenSecret'
    //   token: 'accessTokenHere'
    // }
  }
  }
}

// cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=803837273708101632-3JoY83cLxaYj3whBWLBbZWOy4eSOsuq --variable TWITTER_KEY=mMWzV0QUfCLYwQzbv9EOOi0ed --variable TWITTER_SECRET=AAn5TgqbT1uNN9dZK0XBLHATAUn09UmUbHEXt4Sc8j3zenPWTg