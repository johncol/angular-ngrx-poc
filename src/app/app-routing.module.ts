import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicalInstrumentsListComponent } from './musical-instruments-list/musical-instruments-list.component';
import { AddMusicalInstrumentComponent } from './add-musical-instrument/add-musical-instrument.component';
import { MusicalInstrumentDetailComponent } from './musical-instrument-detail/musical-instrument-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: MusicalInstrumentsListComponent },
  { path: 'new', component: AddMusicalInstrumentComponent },
  { path: 'detail/:id', component: MusicalInstrumentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
