import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from '../Components/doctor/doctor.component';
import { PatientComponent } from '../Components/patient/patient.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent ,children:
    [
      {
        path:"", redirectTo:"#", pathMatch:"full"
      },
      {
        path:"#", component:HomeComponent
      },
      {
        path:"doctor", component:DoctorComponent
      },
      {
        path:"patient",  component:PatientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
