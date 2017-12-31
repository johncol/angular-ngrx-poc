import { ActionReducerMap } from "@ngrx/store/src/models";

import { musicalInstrumentReducer } from "./musical-instrument.reducers";
import { MusicalInstrument } from "./../models/musical-instrument";

export interface MusicalInstrumentState {
  instruments: MusicalInstrument[];
}

export interface AppState {
  musicalInstrument: MusicalInstrumentState;
}

export const appReducers: ActionReducerMap<AppState> = {
  musicalInstrument: musicalInstrumentReducer
};
