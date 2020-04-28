import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentesModule } from './componentes/componentes.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyDkcul34XzZqlAj7Yf9BV3QE0k_tSsg_DY',
  authDomain: 'lasttry-b55ce.firebaseapp.com',
  databaseURL: 'https://lasttry-b55ce.firebaseio.com',
  projectId: 'lasttry-b55ce',
  storageBucket: 'lasttry-b55ce.appspot.com',
  messagingSenderId: '356184309236',
  appId: '1:356184309236:web:7ec782f01e5171df330da1',
  measurementId: 'G-5NQ4S48251'
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
