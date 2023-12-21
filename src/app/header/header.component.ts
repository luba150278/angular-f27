import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent, CommonModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() theme: string = 'light';
  @Output() dataTheme = new EventEmitter<string>();
  // checked: boolean = false;

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme') || 'light';
    this.dataTheme.emit(this.theme);
  }
  changeTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.dataTheme.emit(this.theme);
    localStorage.setItem('theme', this.theme);
  }
}
