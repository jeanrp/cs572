import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
      <app-dumb [arrayOfObjects]="arrayOfObjects"></app-dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  public arrayOfObjects = [{ name: 'Jean' }, { name: 'Emmanuel' }, { name: 'Adriano' }];

  constructor() { }

  ngOnInit() {
  }

}
