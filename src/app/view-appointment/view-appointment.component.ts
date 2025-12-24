import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointments: any[] = [];

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    // Get appointments from sessionStorage or use sample data
    const savedAppointments = sessionStorage.getItem('appointments');
    if (savedAppointments) {
      this.appointments = JSON.parse(savedAppointments);
    } else {
      // Sample data
      this.appointments = [
        { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '9876543210' },
        { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '9876543211' },
        { firstName: 'Mike', lastName: 'Johnson', email: 'mike@example.com', phone: '9876543212' },
        { firstName: 'Sarah', lastName: 'Williams', email: 'sarah@example.com', phone: '9876543213' }
      ];
    }
  }
}
