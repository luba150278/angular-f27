import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { MyTemplateComponent } from './my-template/my-template.component';
import { SvgComponent } from './svg/svg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AuthModule,
    MyTemplateComponent,
    SvgComponent,
  ],
})
export class AppComponent {
  themeApp: string = 'light';

  counter: number = 0;
  changeCounter(e: Event): void {
    console.log(e);
    this.counter += 1;
  }

  changeThemeApp(theme: string): void{
    this.themeApp = theme;
  }
}
