import { Lista } from './../models/lista.model';
import { Action } from '@ngrx/store';
import * as ListaActions from '../store/lista.actions';


const initialState: Lista = {
  ime: 'Zurka',
}
console.log(initialState);
export function reducer(state: Lista[] = [initialState], action: ListaActions.Actions) {
  switch(action.type) {
      case ListaActions.ADD_LISTA:
          return [...state, action.payload];

      case ListaActions.REMOVE_LISTA:
          const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
          return newState;

      default:
        console.log(state);
          return state;

  }
}
