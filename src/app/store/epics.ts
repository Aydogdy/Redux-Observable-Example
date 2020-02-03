import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { UsStateEpics } from '../states/epics/usstate.epics';
import { combineEpics } from 'redux-observable';

@Injectable()
export class RootEpics {
    constructor(private usStateEpics: UsStateEpics) {}

    public createEpics() {
       return combineEpics(
        this.usStateEpics.createEpic()
      );
    }

}
