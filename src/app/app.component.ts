import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../assets/mocks/dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS;
  selectedUserId?: string;
  getSelectedUser(id: string){
    console.log("User is selected with id : " + id);
    this.selectedUserId=id;
  }
  get selectedUser(){
    return this.users.find(user=>user.id===this.selectedUserId);
  }
}
