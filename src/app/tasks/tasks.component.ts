import { Component, Input } from '@angular/core';
import { dummyTasks } from '../../assets/mocks/tasks.mock';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input()
  name?: string;

  @Input()
  id?: string;

  tasks = dummyTasks;

  get selectedUserTask(){
    return this.tasks.filter(task=>task.userId===this.id);
  }

  onMarkTask(id: string){
    this.tasks=this.tasks.filter(task=>task.id!==id);
  }
}
