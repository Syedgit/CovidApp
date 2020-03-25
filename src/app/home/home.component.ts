import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries;
  selectedCountry;
  page;
  pageSize;
  constructor(public dataService: DataSourceService) { }

  ngOnInit() {
    this.dataService.getCountriesData()
    .subscribe(result => { 
      this.countries = result
      this.page = 1;
      this.pageSize = 6;
    });
    
  }
  public selectCountry(country){
    this.selectedCountry= country;
  }
}
