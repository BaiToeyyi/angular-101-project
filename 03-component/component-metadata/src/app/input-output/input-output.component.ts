import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
  inputs: ['name'],
  outputs: ['nameChange']
})
export class InputOutputComponent implements OnInit {

  name: string;
  nameChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.nameChange.emit(`Hello ` + this.name);
  }

}
