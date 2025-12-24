import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  gridData: GridDataResult = { data: [], total: 0 };
  allUsers: User[] = [];
  loading = true;
  error = '';
  state: any = { skip: 0, take: 5, filter: undefined };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.allUsers = data;
        this.processGridData();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        this.loading = false;
        console.error('Error loading users:', err);
      }
    });
  }

  dataStateChange(event: DataStateChangeEvent): void {
    // Update state with the event data
    this.state = {
      skip: event.skip || 0,
      take: event.take || 5,
      filter: event.filter || undefined
    };
    this.processGridData();
  }

  processGridData(): void {
    this.gridData = process(this.allUsers, this.state);
  }

  getAddressString(user: User): string {
    return `${user.address.street}, ${user.address.city}`;
  }
}
