import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({required: true})
  public selectedUserId!: string;

  @Output()
  cancel = new EventEmitter<void>();

  title?: string;
  summary?: string;
  dueDate?: string;

  private tasksService: TasksService;
  
  constructor(private taskService: TasksService){
    this.tasksService=taskService;
  }
  onSubmit() {
    let newTask = {
      title: this.title ? this.title : 'dummy-title',
      dueDate: this.dueDate ? this.dueDate : JSON.stringify(new Date) ,
      summary: this.summary ? this.summary : 'dummy-summary',
    };
    this.tasksService.addTask(newTask, this.selectedUserId);
    this.cancel.emit();
  }

  onCancel(){
    this.cancel.emit();
  }
}
