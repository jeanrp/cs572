import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter [counter]="ComponentCounterValue" (counterChange)="counterWasChanged($event)"></app-counter> 
    <app-counter [counter]="ComponentCounterValue2" (counterChange)="counterWasChanged2($event)"></app-counter> 
  `,
  styles: []
})
export class AppComponent {
  title = 'counter-app';
  public ComponentCounterValue: number = 0;

  counterWasChanged(data: number) { 
    this.ComponentCounterValue = data;    
  }
  
  public ComponentCounterValue2: number = 0;

  counterWasChanged2(data: number) { 
    this.ComponentCounterValue2 = data;    
  }
}
