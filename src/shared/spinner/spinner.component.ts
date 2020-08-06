import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'story-spinner',
  template: `<div *ngIf="visible" id="spinner"> <div class="reverse-spinner"></div></div>`,
  styles: ['spinner.css'],
})

export class SpinnerComponent implements OnDestroy, OnInit {
  visible: boolean = false;
  subscription: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private _spinnerService: SpinnerService) { }

  ngOnInit() {
    this._spinnerService.getSpinnerEmitter().subscribe((value: boolean) => {
      this.visible = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}