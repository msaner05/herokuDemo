// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class LocalstorageserviceService {

//   isProductionEnv: boolean;

//   constructor() {
//     this.isProductionEnv = environment.production;
//   }
//   // environment.production is used to check current envirnoment mode. i.e production or development.

//   setLocalStorage(varname: string, data: any) {
//     if (this.isProductionEnv) {
//       let storagekey = btoa(varname);
//       localStorage.setItem(storagekey, btoa(JSON.stringify(data)));
//     } else {
//       localStorage.setItem(varname, JSON.stringify(data));
//     }
//   }

//   getLocalStorage(varname: string) {
//     if (this.isProductionEnv) {
//       let storagekey = btoa(varname);
//       let tempdata = localStorage.getItem(storagekey);
//       if (tempdata == null) {
//         return tempdata;
//       } else {
//         let localdata = JSON.parse(atob(tempdata));
//         return localdata;
//       }
//     } else {
//       let tempdata = localStorage.getItem(varname);
//       if (tempdata == null) {
//         return tempdata;
//       } else {
//         let localdata = JSON.parse(tempdata);
//         return localdata;
//       }
//     }
//   }

//   removeLocalStorage(varname: string) {////edit by mayur
//     let storagekey = btoa(varname);
//     localStorage.removeItem(storagekey);
//   }  
//   setSessionStorage(varname: string, data: any) {
//     localStorage.setItem(varname, btoa(JSON.stringify(data)));

//   }

//   getSessionStorage(varname: string) {
//     let tempdata = localStorage.getItem(varname);
//     if (tempdata == null) {
//       return tempdata;
//     } else {
//       localStorage.removeItem(varname);
//     }
//   }

// }
