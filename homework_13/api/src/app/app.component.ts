import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
     <a [routerLink]="[ '/users' ]">Users</a>
     <router-outlet></router-outlet>

  `,
  styles: []
})
export class AppComponent {
  title = 'api';

  userClicked: boolean = false;

  people$: Observable<Object>;

  constructor(private dataService: DataService) {
    dataService.getOnlineData();
  }

  showData() {
    this.userClicked = true;
    this.people$ = this.dataService.getCachedData();
  }
}

// <button (click)="showData()">Show data</button>
    
// <ul *ngIf="userClicked">
//   <li *ngFor="let data of people$ | async">
//         {{data.name.first}} {{ data.name.last}}
//   </li>
// </ul>