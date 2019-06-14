import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './userdetails.component';
import { RouterModule } from '@angular/router';
import { myRoutes2 } from './users.routes';
import { ElementByIdDirective } from './element-by-id.directive';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, ElementByIdDirective],
  imports: [
    CommonModule, myRoutes2
  ]
})
export class UsersModule { }
