import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'article/:id',
    component: ArticlePageComponent,
  },
  {
    path: 'signin',
    component: LoginformComponent,
  },
  {
    path: 'contact',
    component: ContactFormComponent,
  },
  {
    path: 'signup',
    component: SignupFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
