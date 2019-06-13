import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <ul>
      <li *ngFor="let item of arrayOfObjects">
        {{item.name}}
      </li>
    </ul>      
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  @Input() arrayOfObjects;

  constructor() { }  

  ngOnInit() {
    
  }

}
