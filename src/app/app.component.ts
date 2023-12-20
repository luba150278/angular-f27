import { Component, TemplateRef, ViewChild } from '@angular/core';
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
    SvgComponent
  ],
})
export class AppComponent {
  title: string = 'angular-f27!!!';
  desc: string = 'lorem20 LOREM';
  nowDate: Date = new Date();
  currencyVal: number = 1000.26689;
  pi: number = Math.PI;
  obj: Object = { name: 'Alina', age: 25 };
  num: number = 6;
  list: string[] = ['Alina', 'Daria', 'Artur', 'Viktor', 'Stas', 'Yuriy'];
  name: string = 'Daria';
  accessToken: string | null = null;

  selectedComponent = MyTemplateComponent;

  id: number = 100;
  src: string = '/assets/images/bg.jpg';

  getText(): string {
    return 'Hello, Angular';
  }
  ngOnInit(): void {
    this.accessToken = localStorage.getItem('accessToken') || null;
  }
}
