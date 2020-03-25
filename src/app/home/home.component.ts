import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  states;
  selectedState;
  constructor() { }

  ngOnInit() {
    this.states = [{id: 1, name: "New Jersey", cases: 2896, growthRate: "36%"}];
  }
  public selectState(state){
    this.selectedState= state;
  }
}
