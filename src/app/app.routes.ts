import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { NewsComponent } from './components/pages/news/news.component';
import { translationGuard } from './guards/translation.guard';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    { path: 'home', canActivate: [translationGuard], component: HomeComponent },
    { path: 'about', canActivate: [translationGuard], component: AboutComponent },
    { path: 'portfolio', canActivate: [translationGuard], component: PortfolioComponent },
    { path: 'news', canActivate: [translationGuard], component: NewsComponent },
    {
        path: ':lang',
        canActivate: [translationGuard],
        component: HomeComponent
    },
    {
        path: ':lang',
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'portfolio', component: PortfolioComponent },
            { path: 'news', component: NewsComponent }
        ],
        canActivate: [translationGuard],
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
