import { Injectable } from '@angular/core';
import { MystateActionTypes, SET_MYSTATE, GET_MYSTATE } from './type';
import { dispatch } from '@angular-redux/store';
import { UsState } from 'src/app/states/model/state';

@Injectable()
export class MystateActions {
  @dispatch()
  setMyState = (st: UsState): MystateActionTypes => ({
    type: SET_MYSTATE,
    payload:  st
  })

  @dispatch()
  getMyState = (): MystateActionTypes => ({
    type: GET_MYSTATE,
    payload: null
  })
}
