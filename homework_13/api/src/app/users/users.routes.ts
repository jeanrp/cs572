import { RouterModule, Routes } from "@angular/router"; 
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './userdetails.component';
import { BeforeUserDetailsGuard } from './before-user-details.guard'; 

const MY_ROUTES: Routes = [
    { path: '', component: UsersComponent },    
    { path: 'details/:uuid', component: UserDetailsComponent, canActivate:[BeforeUserDetailsGuard] },   
    { path: '**', redirectTo: '/' }
];

export const myRoutes2 = RouterModule.forChild(MY_ROUTES);
