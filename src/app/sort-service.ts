import {Injectable} from '@angular/core';
import {Task} from './models/tasks';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  id = 1;
  tasks: Array<Task> = [
    {
      task: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur debitis qui ratione.',
      taskName: 'Lorem 13',
      id: 0,
      myUrl: '',
      editing: false,
    },
  ];

  constructor() {
  }

  public sortByTaskName(tasks) {
    tasks.sort((a, b) => a.taskName > b.taskName ? 1 : -1);
  }

  public sortByTask(tasks) {
    tasks.sort((a, b) => a.task > b.task ? 1 : -1);

  }

  public addTask(a: string, b: string) {
    this.tasks.push({
      task: a,
      taskName: b,
      editing: false,
      myUrl: '',
      id: this.id++,
    });
  }

  public remove(tasks, index) {
    tasks.splice(index, 1);
  }

  public selectFile(event, item) {

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      item.myUrl = reader.result;
    };
  }

  getTasks() {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      this.id = this.tasks.length;
    }
    return this.tasks;
  }

  editTask(index, task, taskName) {
    this.tasks[index].task = task;
    this.tasks[index].taskName = taskName;
  }
}
