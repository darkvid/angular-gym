import { Routes } from '@angular/router';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

export const routes: Routes = [

    {
        path: 'admin/users/',
        component: AdminUserListComponent
    },
    {
        path: 'admin/users/create',
        component: CreateUserComponent
    }

];
