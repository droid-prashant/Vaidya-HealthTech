import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DoctorComponent } from '../Components/doctor/doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from '../Components/patient/patient.component';

@NgModule({
  declarations: [
    HomeComponent,
    DoctorComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
