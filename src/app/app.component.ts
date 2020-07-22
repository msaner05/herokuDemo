import { Component } from '@angular/core';
import { EmpServiceService } from './-emp-service.service';
import { Employee } from './modules/modules.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empDetails: any = {};
  getAllEmps: any;
  title = 'herokudemo';
  constructor(private apiService: EmpServiceService) { }
  ngOnInit() {
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
