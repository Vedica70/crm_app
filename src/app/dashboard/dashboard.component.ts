import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Bar Chart Data - Total Sales Month Wise
  barChartData = [
    { month: 'Jan', sales: 30000 },
    { month: 'Feb', sales: 35000 },
    { month: 'Mar', sales: 42000 },
    { month: 'Apr', sales: 38000 },
    { month: 'May', sales: 45000 },
    { month: 'Jun', sales: 52000 },
    { month: 'Jul', sales: 48000 },
    { month: 'Aug', sales: 55000 },
    { month: 'Sep', sales: 50000 },
    { month: 'Oct', sales: 58000 },
    { month: 'Nov', sales: 62000 },
    { month: 'Dec', sales: 68000 }
  ];

  // Pie Chart Data - Customer Ratings
  pieChartData = [
    { rating: '5 Star', value: 450 },
    { rating: '4 Star', value: 380 },
    { rating: '3 Star', value: 240 },
    { rating: '2 Star', value: 90 },
    { rating: '1 Star', value: 60 }
  ];
}
