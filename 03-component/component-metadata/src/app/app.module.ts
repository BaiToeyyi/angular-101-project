import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { TemplateStyleComponent } from './template-style/template-style.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { HostComponent } from './host/host.component';
import { ExportAsComponent } from './export-as/export-as.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    TemplateStyleComponent,
    InputOutputComponent,
    EncapsulationComponent,
    InterpolationComponent,
    HostComponent,
    ExportAsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
