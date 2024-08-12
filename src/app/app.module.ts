import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SystemTableComponent } from './system-table/system-table.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SystemTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,    // Make sure CommonModule is included here
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


@NgModule({
  declarations: [SystemTableComponent],
  imports: [
    CommonModule,   // Import CommonModule here
  ],
  exports: [SystemTableComponent]
})
export class SystemTableModule { }


