import { Injectable } from '@angular/core';
import { StateActionTypes, GET_STATES, GET_STATES_SUCCEED, GET_STATES_FAILED } from './types';
import { dispatch } from '@angular-redux/store';
import { UsState } from '../model/state';

@Injectable()
export class StateActions {
  @dispatch()
  getStates = (): StateActionTypes => ({
    type: GET_STATES,
    payload: null
  })
  getStateSucceed = (data: UsState[]): StateActionTypes => ({
    type: GET_STATES_SUCCEED,
    payload: data
  })
  getStateFailed = (): StateActionTypes => ({
    type: GET_STATES_FAILED,
    payload: null
  })
}
