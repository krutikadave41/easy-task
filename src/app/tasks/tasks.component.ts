import { Component, Input } from '@angular/core';
import { dummyTasks } from '../../assets/mocks/tasks.mock';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { NewTask, Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input()
  name?: string;

  @Input({required: true})
  id!: string;

  addTaskVisible: boolean = false;

  tasksService: TasksService;

  constructor(private taskService: TasksService){
    this.tasksService = taskService;
  }
  get selectedUserTask(){
    return this.tasksService.getSelectedUserTask(this.id!);
  }

  onStartAddTask(){
    this.addTaskVisible=true;
  }

  onCancel(){
    this.addTaskVisible=false;
  }
}
