import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-as',
  templateUrl: './export-as.component.html',
  styleUrls: ['./export-as.component.scss'],
  exportAs: 'export-as'
})
export class ExportAsComponent implements OnInit {
  public count = 0;

  constructor() { }

  ngOnInit() {
  }

  public increase() {
    this.count++;
  }

}
