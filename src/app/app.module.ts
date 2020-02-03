
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from './store/module';
import { NgReduxRouterModule } from '@angular-redux/router';
import { AppRoutingModule } from './app-routing.module';
import { StateActions } from './states/actions/state.actions';
import { StateService } from './states/service/state.service';
import { UsStateEpics } from './states/epics/usstate.epics';
import { RootEpics } from './store/epics';
import { StateComponent } from './states/state.component';
import { MystateActions } from './mystate/actions/mystate.actions';
import { MystateComponent } from './mystate/mystate.component';

@NgModule({
  declarations: [AppComponent, MystateComponent, StateComponent],
  imports: [
    StoreModule,
    BrowserModule,
    FormsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MystateActions, StateActions, StateService, UsStateEpics, RootEpics],
  bootstrap: [AppComponent],
})
export class AppModule { }
