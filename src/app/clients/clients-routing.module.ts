import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesClientsComponent } from './pages/pages-clients/pages-clients.component';



const routes: Routes = [
  
  { path: '', component: PagesClientsComponent },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
