import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SortServiceService} from '../sort-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './importName.component.html',
  styleUrls: ['./importName.component.scss']
})

export class ImportNameComponent implements OnInit, OnDestroy {

  constructor(private svc: SortServiceService, private router: Router) {
  }

  currentTasks = {
    taskName: '',
    task: '',
    editing: false,
    id: 0,
  };
  myForm: FormGroup = new FormGroup({
    taskName: new FormControl('', Validators.required),
    task: new FormControl('', Validators.required),
  });
  tasks = [];

  ngOnInit() {
    this.tasks = this.svc.getTasks();
  }

// создание задачи
  addTask(task, taskName) {
    this.svc.addTask(taskName, task);
  }

// переключатель
  toggleEdit(item) {
    item.editing = true;
  }

// редактирование задачи
  editTask(item, index) {
    if (this.currentTasks.task.trim() && this.currentTasks.taskName.trim()) {
      this.svc.editTask(index, this.currentTasks.taskName, this.currentTasks.task);
    }
    item.editing = false;
  }

// Перемещение задач
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

// Добавление картинки
  selectFile(event, item) {
    this.svc.selectFile(event, item);
  }

// Сортировка по задаче
  sortByTask(args) {
    this.svc.sortByTask(args);
  }

// Сортировка по имени задачи
  sortByTaskName(args) {
    this.svc.sortByTaskName(args);
  }

// Удаление
  remove(index) {
    this.svc.methodRem(this.tasks, index);
  }

// Роутинг
  onSelect(item) {
    this.router.navigate(['/task', item.id]);
  }

  ngOnDestroy(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
