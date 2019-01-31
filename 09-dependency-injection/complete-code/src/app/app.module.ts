import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService3, UserService2, UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { DIService } from './di.service';

class DIFactory {
  constructor(args) {
    console.log('DI_FACTORY : ' + args);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DIService,
    {
      provide: 'API_HOST',
      useValue: 'http://localhost'
    },
    {
      provide: 'DI_FAC',
      useValue: parseInt(`${(Math.random() * 10) + 1}`, 10) % 2 === 0
    },
    {
      provide: 'DI_FACTORY',
      useFactory: (apiHost) => {
        return new DIFactory(apiHost);
      },
      deps: ['API_HOST']
    },
    {
      provide: 'DI_FACTORY_2',
      useFactory: (difac: boolean) => {
        return difac ? new UserService3() : new UserService2();
      },
      deps: ['DI_FAC']
    },
    {
      provide: 'DI_EXISTS',
      useExisting: UserService
    },
    UserService3
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
