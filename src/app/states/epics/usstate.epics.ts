import { Injectable } from '@angular/core';
import { combineEpics, ofType } from 'redux-observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { StateService } from '../service/state.service';
import { StateActions } from '../actions/state.actions';
import { GET_STATES } from '../actions/types';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UsState } from '../model/state';

@Injectable()
export class UsStateEpics {
    constructor(private stateService: StateService,
                private stateActions: StateActions) {
    }

    public createEpic() {
        return combineEpics(
            getStatesEpic(this.stateService, this.stateActions)
        );
    }
}

export function getStatesEpic(stateService: StateService, stateAction: StateActions) {
    return action$ => action$.pipe(
      ofType(GET_STATES),
      mergeMap((action) => {
          return stateService.loadStates()
              .map((data: UsState[]) => stateAction.getStateSucceed(data))
              .catch(response => of(stateAction.getStateFailed()));
      })
    );
}


