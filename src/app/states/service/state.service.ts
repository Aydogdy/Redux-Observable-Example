import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UsState } from '../model/state';
import 'rxjs/add/operator/map';

@Injectable()
export class StateService {
    constructor(private http: HttpClient) {}

    public loadStates(): Observable<UsState[]> {
        return this.http.get<any>('https://dev-api.shippersolutions.com/api/v1/Address/States');
    }
}
