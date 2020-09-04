
// import { Component } from '@angular/core';
// import { MessagingService } from "./shared/messaging.service";
// import { MastersService } from 'src/shared/services/masters.service';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Notifications POC';
//   message;


//   constructor(private messagingService: MessagingService, private _masterservice: MastersService) { }

//   ngOnInit() {

//     //this.getProj();
//     const userId = 'user001';
//     this.messagingService.requestPermission(userId)
//     this.messagingService.receiveMessage()
//     this.message = this.messagingService.currentMessage

//   }

//   // getProj() {
//   //   this._masterservice.getAllProjects().subscribe((result) => {
//   //     console.log(result);
//   //   });
//   // }
//  }


import { Component } from '@angular/core';
import { MessagingService } from "./shared/messaging.service";
import { EmpServiceService } from './-emp-service.service';
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
  token: any;


  constructor(private messagingService: MessagingService, private apiService: EmpServiceService) { }

  ngOnInit() {   
    const userId = 'user001';
   this.token = this.messagingService.requestPermission(userId);
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
    let NotificationData= { 
      "notification": {
       "title": "Data Added", 
       "body": "Data Added Successfully",
       "icon": '../assets/icons/adduser.png'
      },
      "registration_ids" : [this.messagingService.token]
      }
    if (this.empDetails) {
      this.apiService.postInputEmps(this.empDetails).subscribe((data) => {
        this.getEmps();
      });
      this.apiService.postNotification(NotificationData).subscribe((response) => {
       console.log('response---',response);
      },
      (error) => {
        console.log('error---',error);
      });
    }
  }
 }