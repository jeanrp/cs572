import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  template: `
       <ul>
         <li *ngFor="let data of (obs$ | async);let i = index">
             {{ data.name.first }} <a [routerLink]="[ i ]">Details</a>
         </li>

       </ul>

        
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  obs$: Observable<Object>;
  constructor(private dataService: DataService) { this.obs$ = this.dataService.getCachedData(); }

  ngOnInit() {
  }
 

}
