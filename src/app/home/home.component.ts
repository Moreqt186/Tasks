import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SortServiceService} from '../sort-service.service';

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
export class HomeComponent implements OnInit {
  task;

  constructor(private activateRoute: ActivatedRoute, public sortService: SortServiceService) {
  }

  ngOnInit() {
    const id = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    this.task = this.sortService.getTasks().find((value) => value.id === id);
  }
}
