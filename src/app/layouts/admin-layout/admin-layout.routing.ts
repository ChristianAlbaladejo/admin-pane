import { Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { LoginComponent } from '../../pages/login/login.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from '../../pages/users/users.component';
import { ProductsComponent } from '../../pages/products/products.component'
import { OrdersComponent } from '../../pages/orders/orders.component'
import { FamilyesComponent } from '../../pages/familyes/familyes.component'
import {
    AuthGuardService as AuthGuard
} from '../../services/auth-guard.service';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'user-profile',component: UserProfileComponent },
    { path: 'logs',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',          component: MapsComponent },
    { path: 'users',          component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'products',    component: ProductsComponent, canActivate: [AuthGuard] },
    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
    { path: 'familyes', component: FamilyesComponent, canActivate: [AuthGuard] }
];
