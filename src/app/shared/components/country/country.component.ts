import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  name : string;
  response;
  loader : boolean = false;

  constructor(private getData : GetDataService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.loader = true;
    this.name = this.route.snapshot.params['name'];
    this.getData.getCountry(this.name).subscribe(res => {
      this.response = res;
      console.log(this.response);
      this.loader = false;
    })
  }

}
