import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';

const MY_ROUTES: Routes = [
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    // ** for all routes that we don't recognize, 
    // Routes served from top to bottom so this should always come last!
    { path: '**', redirectTo: '/' }
    
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
