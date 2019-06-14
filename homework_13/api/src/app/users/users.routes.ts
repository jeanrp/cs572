import { RouterModule, Routes } from "@angular/router"; 
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './userdetails.component';

const MY_ROUTES: Routes = [
    { path: '', component: UsersComponent },    
    { path: 'details/:uuid', component: UserDetailsComponent },    
    { path: '**', redirectTo: '/' }
];

export const myRoutes2 = RouterModule.forChild(MY_ROUTES);
