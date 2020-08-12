// import { Injectable } from '@angular/core';

// import { AuthTokenService } from './authToken.service';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { LocalstorageserviceService } from './localstorageservice.service';




// @Injectable()
// export class AuthHttp {
//     constructor(private _httpClient: HttpClient, private _authTokenService: AuthTokenService, private lsService: LocalstorageserviceService) {
//     }
//     createAuthorizURL(url: string) {
//         if (this._authTokenService.authToken !== '') {
//             let _operator = '';
//             url.indexOf('?') > 0 ? _operator = '&' : _operator = '?';
//             url = url.concat(_operator, 'access_token=', this._authTokenService.authToken);
//         } else if (this.lsService.getLocalStorage('tkid') !== '') {
//             let _operator = '';
//             url.indexOf('?') > 0 ? _operator = '&' : _operator = '?';
//             url = url.concat(_operator, 'access_token=', this.lsService.getLocalStorage('tkid'));
//         }
//         return url;
//     }
//     createAuthorizationHeader(headers: HttpHeaders) {
//         if (this._authTokenService.authToken !== '') {
//             headers.append('Authorization', 'Bearer ' + this._authTokenService.authToken);
//         }
//     }

//     addServerType(headers: HttpHeaders) {
//         headers.append('server_type', '');
//     }

//     addContentType(headers: HttpHeaders) {
//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');
//         headers.append('Access-Control-Allow-Origin', '*');
//         headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//         headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token,x-my-custom-header');
//     }

//     addFileContentType(headers: HttpHeaders) {
//         headers.append('Content-Type', 'application/blob');
//         headers.append('Accept', 'application/blob');
//         headers.append('Access-Control-Allow-Origin', '*');
//         headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//         headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token,x-my-custom-header');

//     }

//     get(url: string) {
//         const headers = new HttpHeaders();
//         url = this.createAuthorizURL(url);
//         this.addServerType(headers);
//         this.addContentType(headers);
//         const options = { headers: headers };
//         return this._httpClient.get(url, options);
//     }
//     get7<T>(url: string) {
//         const headers = new HttpHeaders();
//         url = this.createAuthorizURL(url);
//         this.addServerType(headers);
//         this.addContentType(headers);
//         const options = { headers: headers };
//         return this._httpClient.get<T>(url, options);
//     }

//     getFile1<T>(url: string) {
//         const headers = new HttpHeaders();
//         url = this.createAuthorizURL(url);
//         this.addServerType(headers);
//         this.addFileContentType(headers);
//         const options = { headers: headers, responseType: 'blob' as 'json' };
//         return this._httpClient.get(url, options);
//     }

//     post(url: string, body: any) {
//         // this is to call the convert methode and if is for checking the type of body.
//         // if it is simple obj then just call methode else for each obj do the same
//         // if (body instanceof Object) {
//         //     this.convertToUTC(body);
//         // } else {
//         //     body.forEach(payload => {
//         //         this.convertToUTC(payload);
//         //     });
//         // }

//         const headers = new HttpHeaders();
//         url = this.createAuthorizURL(url);
//         this.addContentType(headers);
//         this.addServerType(headers);
//         const options = { headers: headers };
//         return this._httpClient.post(url, body, options);
//     }
//     patch(url: string, body: any) {
//         // this is to call the convert methode and if is for checking the type of body.
//         // if it is simple obj then just call methode else for each obj do the same
//         // if (body instanceof Object) {
//         //     this.convertToUTC(body);
//         // } else {
//         //     body.forEach(payload => {
//         //         this.convertToUTC(payload);
//         //     });
//         // }
//         const headers = new HttpHeaders();
//         url = this.createAuthorizURL(url);
//         this.addContentType(headers);
//         this.addServerType(headers);
//         const options = { headers: headers };
//         return this._httpClient.patch(url, body, options);
//     }
//     put(url: string, body: any) {
//         // this is to call the convert methode and if is for checking the type of body.
//         // if it is simple obj then just call methode else for each obj do the same
//         // if (body instanceof Object) {
//         //     this.convertToUTC(body);
//         // } else {
//         //     body.forEach(payload => {
//         //         this.convertToUTC(payload);
//         //     });
//         // }
//         const headers = new HttpHeaders();
//         url = this.createAuthorizURL(url);
//         this.addContentType(headers);
//         this.addServerType(headers);
//         const options = { headers: headers };
//         return this._httpClient.put(url, body, options);
//     }
//     delete(url: string) {
//         const headers = new HttpHeaders();
//         url = this.createAuthorizURL(url);
//         this.addContentType(headers);
//         this.addServerType(headers);
//         const options = { headers: headers };
//         return this._httpClient.delete(url, options);
//     }


//     // commenting because this is not working for timesheets

//     // this is to convert date into UTC timezone
//     // convertToUTC(payload) {
//     //     const dates = Object.entries(payload).reduce((a, [key, value]) => {
//     //         let temp: any = value;
//     //         return this.isDate(value) ? { ...a, [key]: new Date(temp).toUTCString() } : a;
//     //     }, {});
//     //     // dates will contain all the key:values whose value is of type date
//     //     for (let a in dates) {
//     //         // here we are assigning UTC date to the payload value and this will be returned
//     //         payload[a] = dates[a];
//     //     }
//     //     return payload;
//     //     // console.log(dates);
//     // }
//     // // this will check if the value is of date type
//     // isDate(str) {
//     //     let date = Date.parse(str);
//     //     return (typeof str === 'object' && str instanceof Date) || (typeof str === 'string' && isNaN(+str) && !isNaN(date));
//     // }
// }