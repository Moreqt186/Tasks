import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImportNameComponent} from './taskList/taskList.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SortService} from './sort-service';
import {TaskPageComponent} from './taskPage/taskPage.component';

const appRoutes: Routes = [
  {path: '', component: ImportNameComponent},
  {path: 'task/:id', component: TaskPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ImportNameComponent,
    TaskPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [SortService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
