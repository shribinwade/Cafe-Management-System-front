import { Routes } from '@angular/router';

import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';


export const MaterialRoutes: Routes = [
    {
        path:'category',
        component:ManageCategoryComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
    }
},
        {
        path:'product',
        component:ManageProductComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
        },
        {
            path:'order',
            component:ManageOrderComponent,
            canActivate:[RouteGuardService],
            data:{
                expectedRole:['admin','user']
            }
        }
];
