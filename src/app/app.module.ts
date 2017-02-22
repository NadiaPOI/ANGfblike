import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Importer la const des Routes

import { Routing } from './routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ConnectedComponent } from './components/connected/connected.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConnectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //Ajouter la constante des Routes
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
