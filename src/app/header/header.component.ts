import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NavMenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() theme: string = 'light';
  @Output() dataTheme = new EventEmitter<string>();

  changeTheme(): void{
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.dataTheme.emit(this.theme);
  }
}
