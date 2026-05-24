import { Routes } from '@angular/router';
import { User } from './pages/user/user';

export const routes: Routes = [
{
    path: '*',
    loadComponent: () => import('./pages/user-grid/user-grid').then(m => m.UserGrid)
},
{
    path: 'users',
    loadComponent: () => import('./pages/user-grid/user-grid').then(m => m.UserGrid)
},
{
    path:'AddUser',
    component: User
}

];
