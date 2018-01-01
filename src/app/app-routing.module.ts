import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicalInstrumentsListComponent } from './musical-instruments-list/musical-instruments-list.component';
import { AddMusicalInstrumentComponent } from './add-musical-instrument/add-musical-instrument.component';
import { MusicalInstrumentDetailComponent } from './musical-instrument-detail/musical-instrument-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'musical-instruments', canActivate: [AuthenticationGuard], children: [
    { path: 'list', component: MusicalInstrumentsListComponent },
    { path: 'new', component: AddMusicalInstrumentComponent },
    { path: 'detail/:id', component: MusicalInstrumentDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
