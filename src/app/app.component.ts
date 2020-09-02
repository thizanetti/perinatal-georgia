import { Component } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'perinatal-georgia-app';
  
  constructor(private readonly dataService: DataService){}

  public async ngOnInit() {
    this.dataService.getData().subscribe(res => console.log(JSON.stringify(res)));
  }
}
