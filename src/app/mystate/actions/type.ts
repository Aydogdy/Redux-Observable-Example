import { UsState } from 'src/app/states/model/state';

export const SET_MYSTATE = '[MY STATE SET] Set my state';
export const GET_MYSTATE = '[MY STATE GET] Set my state';

interface SetMyState {
    type: typeof SET_MYSTATE;
    payload: UsState;
}

interface GetMyState {
    type: typeof GET_MYSTATE;
    payload: null;
}

export type MystateActionTypes = SetMyState | GetMyState;
