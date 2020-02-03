import { UsState } from '../model/state';

export const GET_STATES = '[STATE GET] Get states';
export const GET_STATES_SUCCEED = '[STATE GET SUCCEED] Get states SUCCEED';
export const GET_STATES_FAILED = '[STATE GET FAILED] Get states FAILED';

interface GetStates {
    type: typeof GET_STATES;
    payload: null;
}

interface GetStatesSucc {
    type: typeof GET_STATES_SUCCEED;
    payload: UsState[];
}

interface GetStatesFailed {
    type: typeof GET_STATES_FAILED;
    payload: null;
}

export type StateActionTypes = GetStates | GetStatesSucc | GetStatesFailed;
