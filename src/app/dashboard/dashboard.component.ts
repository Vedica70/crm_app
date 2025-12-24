import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Bar Chart Data - Total Sales Month Wise
  // Kendo format: category (x-axis) and value (y-axis)
  barChartData: any[] = [
    { category: 'Jan', value: 30000 },
    { category: 'Feb', value: 35000 },
    { category: 'Mar', value: 42000 },
    { category: 'Apr', value: 38000 },
    { category: 'May', value: 45000 },
    { category: 'Jun', value: 52000 },
    { category: 'Jul', value: 48000 },
    { category: 'Aug', value: 55000 },
    { category: 'Sep', value: 50000 },
    { category: 'Oct', value: 58000 },
    { category: 'Nov', value: 62000 },
    { category: 'Dec', value: 68000 }
  ];

  // Pie Chart Data - Customer Ratings Distribution
  // Kendo format: category and value fields
  pieChartData: any[] = [
    { category: '5 Star', value: 450 },
    { category: '4 Star', value: 380 },
    { category: '3 Star', value: 240 },
    { category: '2 Star', value: 90 },
    { category: '1 Star', value: 60 }
  ];
}
