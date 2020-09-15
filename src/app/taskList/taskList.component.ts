import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SortService} from '../sort-service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Task} from '../models/tasks';

@Component({
  selector: 'app-input',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.scss']
})

export class ImportNameComponent implements OnInit, OnDestroy {
  currentTasks: Task = {
    taskName: '',
    task: '',
    editing: false,
    id: 0,
  };

  tasks: Task[] = [];

  constructor(private svc: SortService, private router: Router) {
  }

  myForm: FormGroup = new FormGroup({
    taskName: new FormControl('', Validators.required),
    task: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.tasks = this.svc.getTasks();
  }
// task creation
  addTask(task: string, taskName: string) {
    this.svc.addTask(taskName, task);
  }

// toggle
  toggleEdit(item: Task) {
    item.editing = true;
  }
// task editing
  editTask(item: Task, index: number) {
    if (this.currentTasks.task.trim() && this.currentTasks.taskName.trim()) {
      this.svc.editTask(index, this.currentTasks.taskName, this.currentTasks.task);
    }
    item.editing = false;
  }

// Drag&Drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

// Adding an image
  selectFile(event, item: Task) {
    this.svc.selectFile(event, item);
  }

// Sort by task content
  sortByTask(args: Task[]) {
    this.svc.sortByTask(args);
  }

// Sort by task name
  sortByTaskName(args: Task[]) {
    this.svc.sortByTaskName(args);
  }

// Deletion
  remove(index: number) {
    this.svc.remove(this.tasks, index);
  }

// Routing
  onSelect(item) {
    this.router.navigate(['/task', item.id]);
  }

  ngOnDestroy(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
