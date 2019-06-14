import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  template: `
  
    <div *ngFor="let item of (items$ | async);let i = index;" [appElementById]="id" [index]="i" >
         
        <br /><h3>Details</h3>
        First Name: {{item.name.first}} <br />
        Last Name : {{item.name.last}} <br />
        Gender : {{ item.gender}}

    </div>
  
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {

  id: number;
  obj: Object;
  items$: Observable<Object>;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    route.params.subscribe(params => { this.id = params['uuid']; });
    this.items$ = this.dataService.getCachedData();
  }

  ngOnInit() {

  }
}

