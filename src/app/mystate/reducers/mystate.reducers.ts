import { ISelectedState } from '../model/mystate';
import { MystateActionTypes, GET_MYSTATE, SET_MYSTATE } from '../actions/type';

export const initialState: ISelectedState = {
  usState: null,
  isLoading: false
};

export function myStateReducer(state = initialState, action: MystateActionTypes): ISelectedState {
  switch (action.type) {
    case GET_MYSTATE:
      return {
        ...state,
      };
    case SET_MYSTATE:
      return {
        ...state,
        usState: action.payload
      };
    default:
      return state;
  }
}
