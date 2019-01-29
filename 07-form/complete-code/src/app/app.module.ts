import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmailValidateDirective } from './email-validate.directive';
import { PasswordValidateDirective } from './password-validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidateDirective,
    PasswordValidateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
