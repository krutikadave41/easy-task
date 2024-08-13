import { Injectable } from "@angular/core";
import { dummyTasks } from "../../assets/mocks/tasks.mock";
import { NewTask, Task } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = dummyTasks;

    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    public addTask(newTask: NewTask, userId: string){
        this.tasks.push({
            id: 't'+(this.tasks.length+1),
            userId: userId!,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate
          });
          this.saveTasks();
    }

    public removeTask(id: string){
        this.tasks=this.tasks.filter(task=>task.id!==id);   
        this.saveTasks();
    }

    public getSelectedUserTask(id: string){
        return this.tasks.filter(task=>task.userId===id);
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}