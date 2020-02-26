import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http : HttpClient) { }

  getAllCountries() : Observable<any>{
    return this.http.get('https://restcountries-v1.p.rapidapi.com/all',
      {
        headers : new HttpHeaders({
          "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
          "x-rapidapi-key": "bf8010588dmsh35bf3ec00a6a414p1d2bb4jsn76cf746787c2"
        })
      }
    );
  }

  getCountry(name : string) : Observable<any>{
    return this.http.get('https://restcountries-v1.p.rapidapi.com/name/' +name,
      {
        headers : new HttpHeaders({
          "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
          "x-rapidapi-key": "bf8010588dmsh35bf3ec00a6a414p1d2bb4jsn76cf746787c2"
        })
      }
    );
  }
}
