import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()" >-</button>
      {{counter}}
    <button (click)="increment()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input() counter : number;
  @Output() counterChange = new EventEmitter();

  public counterValue: number;  

  constructor() { }

  ngOnInit() {    
    this.counterValue = this.counter;
  }

  decrement(){    
    this.counterValue--;    
    this.counterChange.emit(this.counterValue.toString());
  }

  increment(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue.toString());
  }






}
