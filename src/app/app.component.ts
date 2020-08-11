
import { Component } from '@angular/core';
import { MessagingService } from "./shared/messaging.service";
import { MastersService } from 'src/shared/services/masters.service';
import { EmpServiceService } from './-emp-service.service';
import { Employee } from './modules/modules.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notification POC';
  empDetails: any = {};
  getAllEmps: any;
  message;


  constructor(private messagingService: MessagingService, private _masterservice: MastersService, private apiService: EmpServiceService) { }

  ngOnInit() {
    
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
    this.getEmps();
  }

  getEmps() {
    this.apiService.getAllEmps().subscribe((data) => {
      this.getAllEmps = data;
    });
  }
  postEmps(event) {
    if (this.empDetails) {
      this.apiService.postInputEmps(this.empDetails).subscribe((data) => {
        this.getEmps();
      });
    }
  }
 }
