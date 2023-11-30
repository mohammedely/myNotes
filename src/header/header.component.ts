import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  template: '<h1>{{title}}</h1>',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'My Notes'
}
