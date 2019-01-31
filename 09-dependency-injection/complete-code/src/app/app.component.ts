import { Component, Inject, Optional, SkipSelf, Self } from '@angular/core';
import { UserService } from './user.service';
import { DIService } from './di.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    {
      provide: 'API_HOST',
      useValue: 'indjex'
    },
    {
      provide: 'API_HOST_2',
      useValue: 'API_HOST_2'
    }
  ]
})
export class AppComponent {
  title = 'complete-code';

  constructor(
    private userService: UserService,
    private diService: DIService,
    @SkipSelf()
    @Inject('API_HOST') private apiHost: string,
    @Inject('DI_FACTORY') private diFactory,
    @Inject('DI_FACTORY_2') private diFactory2: UserService,
    @Inject('DI_EXISTS2')
    @Optional()
    private diExists,
    @Inject('API_HOST_2')
    @Self()
    private host_2
    ) {
    this.userService.user();
    this.diService.hello();
    console.log(this.apiHost);
    console.log('==========');
    this.diFactory2.user();
    console.log(this.host_2);
    // this.diExists.user();
    // this.diFactory
  }
}
