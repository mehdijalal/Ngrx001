import { Component } from '@angular/core';

//---------ngrx-----------------//
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

interface appState{
  message:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'NgRx001';
  message$:Observable<string>
  constructor(private store:Store<appState>){
    this.message$ = this.store.select('mymessage')
  }

  torontoMessage(){
    this.store.dispatch({type:'Toronto'});
  }
  ottawaMessage(){
    this.store.dispatch({type:'Ottawa'});
  }


}
