import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import { AddInstrumentAction } from '../store/musical-instrument.actions';
import { MusicalInstrument } from '../models/musical-instrument';

@Component({
  selector: 'app-add-musical-instrument',
  templateUrl: './add-musical-instrument.component.html',
  styleUrls: ['./add-musical-instrument.component.css']
})
export class AddMusicalInstrumentComponent implements OnInit {
  form: FormGroup;
  formState: { displayErrors: boolean, displaySuccess: boolean };

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.formState = { displayErrors: false, displaySuccess: false };
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  add(): void {
    if (this.form.valid) {
      this.store.dispatch(new AddInstrumentAction({...this.form.value}))
      this.form.reset();
      this.formState.displayErrors = false;
      this.formState.displaySuccess = true;
    } else {
      this.formState.displayErrors = true;
    }
  }

}
