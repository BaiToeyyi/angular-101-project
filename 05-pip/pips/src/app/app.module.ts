import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanflyPipe } from './canfly.pipe';
import { FormsModule } from '@angular/forms';
import { CanflyImpurePipe } from './canfly-impure.pipe';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { WithOptionPipe } from './with-option.pipe';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    CanflyPipe,
    CanflyImpurePipe,
    WithOptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
