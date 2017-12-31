import { Action } from "@ngrx/store";
import { MusicalInstrument } from "../models/musical-instrument";

export class InstrumentActionType {
  static ADD_INSTRUMENT: string = 'ADD_INSTRUMENT';
  static DELETE_INSTRUMENT: string = 'DELETE_INSTRUMENT';
}

export class AddInstrumentAction implements Action {
  readonly type: string = InstrumentActionType.ADD_INSTRUMENT;
  constructor(
    public payload: MusicalInstrument
  ) { }
}

export class DeleteInstrumentAction implements Action {
  readonly type: string = InstrumentActionType.DELETE_INSTRUMENT;
  constructor(
    public payload: MusicalInstrument
  ) { }
}

export type MusicalInstrumentAction = AddInstrumentAction | DeleteInstrumentAction;
