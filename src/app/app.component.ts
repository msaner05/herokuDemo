
import { Component } from '@angular/core';
import { MessagingService } from "./shared/messaging.service";
import { MastersService } from 'src/shared/services/masters.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notifications POC';
  message;
  

  constructor(private messagingService: MessagingService, private _masterservice: MastersService) { }

  ngOnInit() {
    
    //this.getProj();
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage

  }

  // getProj() {
  //   this._masterservice.getAllProjects().subscribe((result) => {
  //     console.log(result);
  //   });
  // }
 }


// import { Component } from '@angular/core';
// import { EmpServiceService } from './-emp-service.service';
// import { Employee } from './modules/modules.module';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   empDetails: any = {};
//   getAllEmps: any;
//   title = 'herokudemo';
//   constructor(private apiService: EmpServiceService) { }
//   ngOnInit() {
//     this.getEmps();
//   }
//   getEmps() {
//     this.apiService.getAllEmps().subscribe((data) => {
//       this.getAllEmps = data;
//     });
//   }
//   postEmps(event) {
//     if (this.empDetails) {
//       this.apiService.postInputEmps(this.empDetails).subscribe((data) => {
//         this.getEmps();
//       });
//     }
//   }
// }
