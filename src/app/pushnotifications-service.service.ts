import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushnotificationsServiceService {

  API_KEY = 'pushnote';
  constructor(private httpClient: HttpClient) { }
  getAllToken() {
    return this.httpClient.get(`https://herokutoazure-apidemo.herokuapp.com/api/pushnotifications`);
  }
  postNewToken(data) {
    return this.httpClient.post(`https://herokutoazure-apidemo.herokuapp.com/api/pushnotifications`, data);
  }
}
