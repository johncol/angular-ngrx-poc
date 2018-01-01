import { ActionReducerMap } from "@ngrx/store/src/models";

import { musicalInstrumentReducer } from "./musical-instrument.reducers";
import { MusicalInstrument } from "./../models/musical-instrument";
import { authReducer } from "./auth.reducers";

export interface MusicalInstrumentState {
  instruments: MusicalInstrument[];
}

export interface AuthState {
  authenticated: boolean;
  user: string;
}

export interface AppState {
  musicalInstrument: MusicalInstrumentState;
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  musicalInstrument: musicalInstrumentReducer,
  auth: authReducer
};
