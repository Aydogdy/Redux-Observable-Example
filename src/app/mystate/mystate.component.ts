import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/internal/Observable';
import { UsState } from '../states/model/state';

@Component({
  selector: 'app-mystate',
  templateUrl: './mystate.component.html',
  styleUrls: ['./mystate.component.scss']
})
export class MystateComponent implements OnInit {

  @select(['selectedState', 'usState'])
  readonly selectedState$: Observable<UsState>;

  constructor() { }

  ngOnInit() {
  }

}
