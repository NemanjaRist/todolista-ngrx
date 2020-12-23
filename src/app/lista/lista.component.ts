import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Lista } from './../models/lista.model';
import * as ListaActions from '../store/lista.actions';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public liste: Observable<Lista[]>;
  public imeInput: string = '';

  constructor( public store: Store<AppState> ) {
    this.liste = store.select('lista');
  }



  public delLista(index: number)
  {
    this.store.dispatch(new ListaActions.RemoveLista(index));
  }

  addLista(ime: any) {
    this.store.dispatch(new ListaActions.AddLista({ime: ime}) );
    this.imeInput = '';
  }
  ngOnInit(): void {
  }
}
