import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Perinatal } from '../classes/perinatal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  options: any;
  perinatals: Array<Perinatal>;

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      res => {
        this.perinatals = res as Perinatal[];
        this.processData()
      }
    );
  }

  processData(){
    const hospitals = ['Northside Hospital', 'Emory Johns Creek', 'Dekalb', 'North Fulton', 'Atlanta Medical'];
    const exclude_north_side = ['HOSP266','HOSP541', 'HOSP346'];
    const subSetOfPerinatals = this.perinatals
                               .filter(per => new RegExp(hospitals.join("|")).test(per.facility_name))
                               .filter(per => !exclude_north_side.find(uid => uid == per.uid))
    
    const xAxisData = Array.from(new Set(subSetOfPerinatals.map(per => per.yr)))
    let dic = {};

    subSetOfPerinatals.forEach(per => {
      if(!(per.uid in dic)){
        dic[per.uid] = {
          c_section_rates: new Array(),
          name: per.facility_name
        }
      }
      dic[per.uid].c_section_rates.push(Math.floor((per.c_sect / per.total_births)*100));
    });

    const series = new Array();
    Object.keys(dic).forEach(per => {
      series.push({
        name: dic[per].name,
        type: 'bar',
        data: dic[per].c_section_rates,
        animationDelay: (idx) => idx * 10,
      });
    })    

    this.options = {
      legend: {
        data: Object.keys(dic).map(per => dic[per].name),
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: series,
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

}
