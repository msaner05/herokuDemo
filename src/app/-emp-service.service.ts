import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  API_KEY = 'test';
  constructor(private httpClient: HttpClient) { }
  getAllEmps() {
    return this.httpClient.get(`http://localhost:3000/api/empdetails`);
  }
  postInputEmps(data) {
    return this.httpClient.post(`http://localhost:3000/api/empdetails`, data);
  }
}
