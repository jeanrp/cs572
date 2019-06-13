import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-smart appMakeBigger="20px" appIsVisible="true"></app-smart>
    
    <p>{{title | multi:3}} </p>
  `,
  styles: []
})
export class AppComponent {
  title = 'DirectiveAndPipe';
}
