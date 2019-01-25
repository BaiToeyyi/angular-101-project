import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
  interpolation: ['::', '::']
})
export class InterpolationComponent implements OnInit {

  title = 'app-interpolation';

  ngOnInit() {
  }
}
