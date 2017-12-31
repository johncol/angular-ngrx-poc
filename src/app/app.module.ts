import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { MusicalInstrumentsListComponent } from './musical-instruments-list/musical-instruments-list.component';
import { AddMusicalInstrumentComponent } from './add-musical-instrument/add-musical-instrument.component';

import { appReducers } from './store/app-state';
import { MusicalInstrumentDetailComponent } from './musical-instrument-detail/musical-instrument-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicalInstrumentsListComponent,
    AddMusicalInstrumentComponent,
    MusicalInstrumentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
