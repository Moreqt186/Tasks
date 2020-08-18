import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImportNameComponent} from './importName/importName.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SortServiceService} from './sort-service.service';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: ImportNameComponent},
  {path: 'task/:id', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ImportNameComponent,
    HomeComponent,
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
  providers: [SortServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
