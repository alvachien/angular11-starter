import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button';
=======
>>>>>>> f13ab49c7673317bc34f7b1b9c597955666c925c

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatButtonModule,
=======
    BrowserAnimationsModule
>>>>>>> f13ab49c7673317bc34f7b1b9c597955666c925c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
