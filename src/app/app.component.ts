import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('isCollapsed', [
      state('0', style({
        'max-height': '100vh',
      })),
      state('1',   style({
        'max-height': '25vh',
      })),
      transition('1 => 0', animate('500ms ease-out')),
    ]),
  ],
})
export class AppComponent {
  title = 'ng-patco';

  isCollapsed: boolean = true; // Boolean to enable bootstrap navbar collapse feature

  toggleCollapse() {
    this.isCollapsed = this.isCollapsed ? false : true;
  }


}
