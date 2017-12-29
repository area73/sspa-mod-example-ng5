import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabOneComponent} from "./tab-one/tab-one.component";
import {TabTwoComponent} from "./tab-two/tab-two.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path: 'tab-1',
        component: TabOneComponent
    },
    {
        path: 'tab-2',
        component: TabTwoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
