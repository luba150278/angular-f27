import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './404/404.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '404', component: ErrorComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: ':lang',
    children: [
      { path: '', component: HomeComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'post/:id', component: PostComponent },
      { path: '404', component: ErrorComponent },
      { path: 'auth', component: AuthComponent },
    ],
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
