import { IStates } from '../model/state';
import { StateActionTypes,
        GET_STATES,
        GET_STATES_SUCCEED,
        GET_STATES_FAILED
      } from '../actions/types';

export const initialState: IStates = {
    states: [],
    isLoading: false
};

export function contactReducer(state = initialState, action: StateActionTypes): IStates {
  switch (action.type) {
    case GET_STATES:
      return {
        ...state,
        isLoading: true
      };
    case GET_STATES_SUCCEED:
      return {
        states: action.payload,
        isLoading: false
      };
      case GET_STATES_FAILED:
        return {
          ...state,
          isLoading: false
        };
    default:
      return state;
  }
}
