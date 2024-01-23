import { Component, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './404/404.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';
import { LangService } from './services/lang.service';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { StoreModule } from '@ngrx/store';
import { authReduser } from './share/store/reducers/auth.reducer';
import { AuthService } from './services/auth.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    ErrorComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReduser }),
    // StoreDevtoolsModule.instrument(),
  ],
  providers: [
    provideClientHydration(),
    ThemeService,
    LangService,
    PostService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
