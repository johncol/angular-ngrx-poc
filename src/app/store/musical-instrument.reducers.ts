import { AppState, MusicalInstrumentState } from "../store/app-state";
import { MusicalInstrument } from "../models/musical-instrument";
import { MusicalInstrumentAction, InstrumentActionType } from "./musical-instrument.actions";

const initialState: MusicalInstrumentState = {
  instruments: [
    MusicalInstrument.new('Guitar', 'https://megamusic.blob.core.windows.net/images/0000250_ibanez-rg370ahmz-bmt-electric-guitar.jpg'),
    MusicalInstrument.new('Drum', 'https://media.sweetwater.com/api/i/q-82__ha-07f24c8e348a9ae2__hmac-28611a04854a825d0aa6629a91c079148612ba88/images/items/750/Peacemaker-large.jpg'),
    MusicalInstrument.new('Violin', 'http://www.tiendadelmusico.com/5087-large_default/greko-mv1410af-violin-en-acabado-antique-mate-con-estuche-arco-y-colofonia.jpg')
  ]
};

export function musicalInstrumentReducer(state: MusicalInstrumentState = initialState, action: MusicalInstrumentAction): MusicalInstrumentState {
  switch (action.type) {
    
    case InstrumentActionType.ADD_INSTRUMENT:
      return {
        ...state,
        instruments: [...state.instruments, action.payload]
      };

    case InstrumentActionType.DELETE_INSTRUMENT:
      const index: number = state.instruments.indexOf(action.payload);
      let instruments: MusicalInstrument[];
      if (index !== -1) {
        instruments = [...state.instruments];
        instruments.splice(index, 1);
      } else {
        console.error('Cannot find instrument to delete:', action.payload);
        instruments = state.instruments;
      }
      return {
        ...state,
        instruments: instruments
      };

    default:
      return state;
  }
}
