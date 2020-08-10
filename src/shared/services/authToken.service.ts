/* angular dependencies */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError, finalize } from "rxjs/operators";
import { Router } from '@angular/router';

/** Third party dependencies */
import { SpinnerService } from '../spinner/spinner.service';
import { Config } from '../config/config';
import { AuthHttp } from './authHTTP.service';
//import { CommonService } from './common.service';
import { jsonpFactory } from '@angular/http/src/http_module';
import { LocalstorageserviceService } from './localstorageservice.service';

@Injectable()
export class AuthTokenService {
    http: Http;
    authToken: any = '';
    loggedInUserData: any;
    loggedInUserName: any = '';
    loggedInUserRole: any;
    type: any = 'request';

    // constructor(private commonService: CommonService) { }
    constructor(private lsService: LocalstorageserviceService) { }


    isLoggesIn() {
        if (this.lsService.getLocalStorage('tkid') === undefined
            || this.lsService.getLocalStorage('tkid') === null
            || this.lsService.getLocalStorage('tkid') === '') {
            return false;

        } else {
            return true;
        }
    }

    getLoggedInUsers(): any {

        if (this.lsService.getLocalStorage('currentuser') === undefined
            || this.lsService.getLocalStorage('currentuser') === null
            || this.lsService.getLocalStorage('currentuser') === '') {
            return undefined;

        } else {
            return this.lsService.getLocalStorage('currentuser');
        }
        // if (atob(localStorage.getItem(btoa('currentuser'))) === undefined
        //     || atob(localStorage.getItem(btoa('currentuser'))) === null
        //     || atob(localStorage.getItem(btoa('currentuser'))) === '') {
        //     return undefined;

        // } else {
        //     return JSON.parse(atob(localStorage.getItem(btoa('currentuser'))));
        // }
    }

    /** Success Handler */
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        const body = res.json();
        return body || {};
    }

    /** Error Handler */
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
