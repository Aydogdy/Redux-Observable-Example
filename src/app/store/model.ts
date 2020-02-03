import { ISelectedState } from '../mystate/model/mystate';
import { IStates } from '../states/model/state';

export interface IAppState {
    states?: IStates;
    selectedState?: ISelectedState;
}
