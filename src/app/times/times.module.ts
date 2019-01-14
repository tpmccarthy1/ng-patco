import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NextTimeComponent } from './next-time/next-time.component';

@NgModule({
  declarations: [
      NextTimeComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
  ],
  providers: [
  ],
  bootstrap: [
  ],
})
export class TimesModule { }
