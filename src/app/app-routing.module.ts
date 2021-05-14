import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { HistoricComponent } from './components/historic/historic.component';
import { GridComponent } from './components/grid/grid.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'historic',
    component: HistoricComponent,
  },
  {
    path: 'jobs',
    component: GridComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
