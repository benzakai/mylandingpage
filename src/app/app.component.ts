import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemTableComponent } from './system-table/system-table.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SystemTableComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-landing-page';
}
