import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ValueTransformer } from '@angular/compiler/src/util';
import { SpinnerService } from '../spinner/spinner.service';
//import { CommonService } from 'src/shared/services/common.service';
import { Router, NavigationExtras } from '@angular/router';

import { Config } from '../config/config';
import { AuthHttp } from './authHTTP.service';
import { AuthTokenService } from './authToken.service';
import { map, catchError, finalize } from "rxjs/operators";
// import {
//   Account, Project, UserStory, Employee, Task, Department, Country,
//   RolesResponsibility, HirarchyLevels, Permission, PermissionMatrix, Email, EffortsPlan, FiscalYear, LeaveType, Holidays,
//   Leaves, EmailSender, TodoList, Designation
// } from '../modules/modules.module';
//import { MessageboxService } from '../components/messagebox/messagebox.service';
///import { ToasterService } from '../components/toaster/toaster.service';
//import * as moment from 'moment';
import { _throw } from 'rxjs/observable/throw';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

//import { LocalstorageserviceService } from './localstorageservice.service';


@Injectable({
  providedIn: 'root'
})
export class MastersService {
  http: Http;
  constructor(http: Http,
    private httpClient: HttpClient,
    // private _commonService: CommonService,
    private authHttp: AuthHttp,
    private _router: Router,
    private _spinnerService: SpinnerService,
    //private _msgBoxService: MessageboxService,
    //private _toasterService: ToasterService,
    private _authTokenService: AuthTokenService) { }

  // getAllProjects(): any {
  //   const ctl = this;
  //   const url = Config.GetURL('/api/projectmasters');
  //   this._spinnerService.show();
  //   return this.authHttp.get7(url).pipe(
  //     catchError((err: HttpErrorResponse) => {
  //     this.handleCtlError(ctl, err);
  //       return _throw(err);
  //     })
  //     , finalize(() => this._spinnerService.hide()));
  // }

  addTokens(payload: any) {
    const ctl = this;
    const url = Config.GetURL('/api/pushnotifications');
    this._spinnerService.show();
    return this.authHttp.post(url, payload).pipe(
      catchError((err: HttpErrorResponse) => {
      this.handleCtlError(ctl, err);
        return _throw(err);
      })
      , finalize(() => this._spinnerService.hide()));
  }
  getAllUserTokens(): any {
    const ctl = this;
    const url = Config.GetURL('/api/pushnotifications');
    this._spinnerService.show();
    return this.authHttp.get7(url).pipe(
      catchError((err: HttpErrorResponse) => {
       this.handleCtlError(ctl, err);
        return _throw(err);
      })
      , finalize(() => this._spinnerService.hide()));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error', errorResponse.error.message);
      //this._toasterService.showMessage('Please contact your admin !', 'Error Message', 'error');
    } else {
      console.error('Server Side Error', errorResponse);
     // this._toasterService.showMessage('Please contact your admin !', 'Error Message', 'error');
    }

    return new ErrorObservable();
  }


  private handleCtlError(ctl: any, errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error', errorResponse.error.message);
      if (ctl._toasterService)
        ctl._toasterService.showMessage('Please contact your admin !', 'Some thing went wrong', 'error');
    } else {
      console.error('Server Side Error', errorResponse);
      if (errorResponse.statusText == "Unauthorized") {
        ctl._toasterService.showMessage('Please login again !', 'Login required', 'error');
        localStorage.clear();
        this._router.navigate(['/login']);
      } else if (errorResponse.error.message == "Invalid current password") {
        ctl._toasterService.hide();
        ctl._toasterService.showMessage('Please enter right password !', 'Invalid current password', 'error');
      } else if (ctl._toasterService) {
        ctl._toasterService.showMessage('Please contact your admin !', 'Some thing went wrong', 'error');
        return;
      }
    }
  }
}
