import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SortService} from '../sort-service';
import {Task} from '../models/tasks';

@Component({
  selector: 'app-home',
  template: `
      <div class="container m-1">
          <button type="button" class="btn btn-outline-info bg-light m-1" routerLink="/">На главную</button>
          <h1 class="text-light m-1">Имя задачи: {{task.taskName}}</h1>
          <h3 class="text-light">Содержание задачи: {{task.task}}</h3>
          <div><img [src]='task.myUrl' *ngIf="task.myUrl">
          </div>
      </div>`
})
export class TaskPageComponent implements OnInit {
  task: Task;

  constructor(private activateRoute: ActivatedRoute, public sortService: SortService) {
  }

  ngOnInit() {
    const id = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    this.task = this.sortService.getTasks().find((value) => value.id === id);
  }
}
