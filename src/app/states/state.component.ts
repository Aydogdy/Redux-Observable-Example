import { Component, OnInit } from '@angular/core';
import { UsState, IStates } from './model/state';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/internal/Observable';
import { StateActions } from './actions/state.actions';
import { MystateActions } from '../mystate/actions/mystate.actions';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  @select(['usStates', 'states'])
  readonly states$: Observable<IStates>;
  @select(['usStates', 'isLoading'])
  readonly isLoading$: Observable<boolean>;

  constructor(private mystateActions: MystateActions, private stateActions: StateActions) {}

  ngOnInit() {
    this.stateActions.getStates();
  }

  onStateSelect(state: UsState) {
    this.mystateActions.setMyState(state);
  }

}
