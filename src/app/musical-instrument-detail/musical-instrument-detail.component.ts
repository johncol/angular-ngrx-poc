import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, MusicalInstrumentState } from '../store/app-state';
import { MusicalInstrument } from '../models/musical-instrument';
import { DeleteInstrumentAction } from '../store/musical-instrument.actions';

@Component({
  selector: 'app-musical-instrument-detail',
  templateUrl: './musical-instrument-detail.component.html',
  styleUrls: ['./musical-instrument-detail.component.css']
})
export class MusicalInstrumentDetailComponent implements OnInit {
  state: Observable<MusicalInstrumentState>;
  instrument: MusicalInstrument;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.state = this.store.select('musicalInstrument');
    this.state.subscribe(musicalInstrumentState => {
      this.instrument = musicalInstrumentState.instruments
        .find(instrument => instrument.id === this.activatedRoute.snapshot.params['id'])
    });
  }

  removeInstrument(): void {
    this.store.dispatch(new DeleteInstrumentAction(this.instrument));
    this.router.navigate(['musical-instruments', 'list']);
  }

}
