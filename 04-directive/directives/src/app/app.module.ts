import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDirective } from './display.directive';
import { SwitchColorDirective } from './switch-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDirective,
    SwitchColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
