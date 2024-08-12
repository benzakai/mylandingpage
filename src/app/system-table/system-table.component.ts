import { Component } from '@angular/core';

@Component({
  selector: 'app-system-table',
  standalone: true,
  templateUrl: './system-table.component.html',
  styleUrls: ['./system-table.component.css']
})
export class SystemTableComponent {
  systems = [
    { name: 'System A', kwp: 100, portal: 'Portal X', today: 'Online' },
    { name: 'System B', kwp: 200, portal: 'Portal Y', today: 'Offline' },
    { name: 'System C', kwp: 150, portal: 'Portal Z', today: 'Maintenance' },
    { name: 'System D', kwp: 250, portal: 'Portal W', today: 'Online' }
  ];
}
