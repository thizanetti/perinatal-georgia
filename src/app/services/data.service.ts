import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

    public getData() {
      return this.http.get('./assets/ga_perinatal_2000_2010.json');
    }
}
