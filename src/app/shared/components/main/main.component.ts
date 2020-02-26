import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  searchForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'search' : new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.searchForm);
  }

}
