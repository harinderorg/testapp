import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   ,FirebaseAuthentication,
   TwitterConnect
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
