import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "https://randomuser.me/api/?results=10";

  constructor(private http: HttpClient) { }

  getOnlineData() {
    this.http.get<Observable<Object[]>>(this.url).subscribe((data) => {
      let res = JSON.parse(JSON.stringify(data));
      console.log(res.results);
      localStorage.setItem('data', JSON.stringify(res.results));
    }, (error) => {
      console.log(error);
    });

  }

  getCachedData() {
    let storageData = JSON.parse(localStorage.getItem("data"));
  
      return of(storageData).pipe(shareReplay(1));  
  }

}

 