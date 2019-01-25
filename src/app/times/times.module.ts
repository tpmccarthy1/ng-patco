import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NextTimeComponent } from './next-time/next-time.component';
import { TimesService } from './times.service';
import { SearchTimeComponent } from './search-time/search-time.component';

@NgModule({
  declarations: [
      NextTimeComponent,
      SearchTimeComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      NgxSpinnerModule,
  ],
  providers: [
      TimesService,
  ],
  bootstrap: [
  ],
})
export class TimesModule { }
