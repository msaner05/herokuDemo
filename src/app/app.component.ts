import { Component } from '@angular/core';
import { EmpServiceService } from './-emp-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: any;
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
  postEmps() {
    if (this.name) {
      this.apiService.postInputEmps(this.name).subscribe((data) => {
        this.getEmps();
      });
    }
  }
}
