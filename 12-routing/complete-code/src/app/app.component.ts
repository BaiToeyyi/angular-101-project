import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Route, NavigationEnd, NavigationStart, GuardsCheckEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public display = false;
  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd || event instanceof NavigationStart || event instanceof GuardsCheckEnd),
    )
    .subscribe({
      next: (navigation: NavigationEnd | NavigationStart | GuardsCheckEnd) => {
        if (navigation instanceof NavigationEnd) {
          const { title }  = this.route.root.firstChild.snapshot.data;
          this.titleService.setTitle(title);
          this.display = false;
        } else if (navigation instanceof NavigationStart) {
          this.display = true;
        } else if (navigation instanceof GuardsCheckEnd && !navigation.shouldActivate) {
          this.display = false;
        }
      }
    });
  }
}
