import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  API_KEY : any;
  constructor(private httpClient: HttpClient) { }
  getAllEmps() {
    return this.httpClient.get(`https://herokutoazure-apidemo.herokuapp.com/api/empdetails`);
  }
  postInputEmps(data) {
    return this.httpClient.post(`https://herokutoazure-apidemo.herokuapp.com/api/empdetails`, data);
  }
  postNotification(data){
    let headers: HttpHeaders = new HttpHeaders();
    this.API_KEY = 'AAAAWK112nY:APA91bEAMo0_5HYaR0A9LTslnyGAEIqgTIu1Pica4pyxRQsmM0qzlJ3yD5-X0wdT4M18IJBp1eIEOg0T74IFPed68FGzl5hkypuWIu2eaCPT1dKWOR-asCQpTGNblsniAXNqxvTY1wPs'; 
    headers= headers.append('Authorization', 'key=' + this.API_KEY);
    headers=  headers.append('content-Type', 'application/json');
    return this.httpClient.post(`https://fcm.googleapis.com/fcm/send`, data, {headers: headers});
  }
  
}
