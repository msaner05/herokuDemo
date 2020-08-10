import { Injectable, EventEmitter } from '@angular/core';
//import { Subject } from "rxjs/Subject";

@Injectable()
export class SpinnerService {
  private _spinnerSubject: EventEmitter<boolean> = new EventEmitter<boolean>();
  response: boolean = false;

  show() {
    this.response = true;
    this._spinnerSubject.emit(this.response);
  }

  hide() {
    this.response = false;
    this._spinnerSubject.emit(this.response);
  }

  getSpinnerEmitter() {
    return this._spinnerSubject;
  }
}
