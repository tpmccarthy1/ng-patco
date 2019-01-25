import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NextTimeComponent } from './times/next-time/next-time.component';
import { SearchTimeComponent } from './times/search-time/search-time.component';

const routes: Routes = [
  {path: '', component: NextTimeComponent},
  {path: 'search', component: SearchTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
