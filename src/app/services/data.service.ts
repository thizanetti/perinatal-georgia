import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perinatal } from '../classes/perinatal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

    public getData() {
      return this.http.get<Perinatal[]>('./assets/ga_perinatal_2000_2010.json');
    }
}
