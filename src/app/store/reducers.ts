import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { contactReducer } from '../states/reducers/contact.reducers';
import { myStateReducer } from '../mystate/reducers/mystate.reducers';

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        usStates: contactReducer,
        selectedState: myStateReducer
    }));
