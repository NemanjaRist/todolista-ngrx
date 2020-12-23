import { Lista } from './../models/lista.model';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';


export const ADD_LISTA = '[LISTA] Add';
export const REMOVE_LISTA = '[LISTA] Remove';

export class AddLista implements Action {

  readonly type = ADD_LISTA;

  constructor( public payload: Lista ){}

}

export class RemoveLista implements Action {

  readonly type = REMOVE_LISTA;

  constructor( public payload: number ){}

}

export type Actions = AddLista | RemoveLista
