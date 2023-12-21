import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { MyTemplateComponent } from './my-template/my-template.component';
import { SvgComponent } from './svg/svg.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Comp1Component } from './comp1/comp1.component';

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
    MatTabsModule,
    Comp1Component,
  ],
})
export class AppComponent {
  themeApp: string = 'light';
  counter: number = 0;

  titleComp1 = 'Comp1';
  titleComp2 = 'Comp2';
  titleComp3 = 'Comp3';
  descComp1 =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vitae deserunt voluptas magnam ullam temporibus? Atque consequatur ex, eum enim rem at, excepturi architecto reiciendis impedit mollitia adipisci? Voluptatibus, minima. Dolore repellat, quis esse unde, nesciunt sed reprehenderit quibusdam, quae dolorum dolores tenetur. Excepturi unde fugit laborum quae sunt. Quasi iusto odio ab necessitatibus amet vitae debitis fuga veniam vel provident dolores officia nisi, magnam quos odit mollitia aut, recusandae quia nam sequi a voluptatum facilis atque! Fugit earum voluptatem fugiat laudantium at, corporis expedita culpa possimus, in esse excepturi deleniti eos beatae quaerat suscipit id dolores laborum modi cupiditate.';
  descComp2 =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vitae deserunt voluptas magnam ullam temporibus? Atque consequatur ex, eum enim rem at, excepturi architecto reiciendis impedit mollitia adipisci? Voluptatibus, minima. Dolore repellat, quis esse unde, nesciunt sed reprehenderit quibusdam, quae dolorum dolores tenetur. Excepturi unde fugit laborum quae sunt.';
  descComp3 =
    'AAAAAAAAAAAAAAAAA Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vitae deserunt voluptas magnam ullam temporibus? Atque consequatur ex, eum enim rem at, excepturi architecto reiciendis impedit mollitia adipisci? Voluptatibus, minima. Dolore repellat, quis esse unde, nesciunt sed reprehenderit quibusdam, quae dolorum dolores tenetur. Excepturi unde fugit laborum quae sunt. Quasi iusto odio ab necessitatibus amet vitae debitis fuga veniam vel provident dolores officia nisi, magnam quos odit mollitia aut, recusandae quia nam sequi a voluptatum facilis atque! Fugit earum voluptatem fugiat laudantium at, corporis expedita culpa possimus, in esse excepturi deleniti eos beatae quaerat suscipit id dolores laborum modi cupiditate.';

  changeCounter(e: Event): void {
    console.log(e);
    this.counter += 1;
  }

  changeThemeApp(theme: string): void {
    this.themeApp = theme;
  }
}
