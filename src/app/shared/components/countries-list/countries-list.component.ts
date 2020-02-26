import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  response = [];
  loader : boolean = false;

  constructor(private getData : GetDataService) { }

  ngOnInit() {
    this.loader = true;
    this.getData.getAllCountries().subscribe(res => {
      this.response = res;
      console.log(this.response);
      this.loader = false;
    })
  }

}
