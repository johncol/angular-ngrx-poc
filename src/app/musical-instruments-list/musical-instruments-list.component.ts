import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MusicalInstrument } from '../models/musical-instrument';
import { AppState, MusicalInstrumentState } from '../store/app-state';

@Component({
  selector: 'app-musical-instruments-list',
  templateUrl: './musical-instruments-list.component.html',
  styleUrls: ['./musical-instruments-list.component.css']
})
export class MusicalInstrumentsListComponent implements OnInit {
  state: Observable<MusicalInstrumentState>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.state = this.store.select('musicalInstrument');
  }

}
