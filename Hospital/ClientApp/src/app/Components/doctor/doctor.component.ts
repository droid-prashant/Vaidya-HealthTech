import { Component, OnInit, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/Model/doctorModel';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
doctor:Doctor= new Doctor();
  doctorList:any;
  doctorRow:Doctor=new Doctor();
  doctorId:number=0
  isDoctorSelected:boolean=false;
@ViewChild('closebutton') closebutton: any;
@ViewChild('closeDelete') closeDelete:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.listDoctor();
  }

  addDoctor(){
    let doctorValue:Doctor=new Doctor();
    doctorValue=this.doctor.DoctorFormGroup.value;

    this.apiService.postDoctor(doctorValue).subscribe(
      res=>{
          alert("Doctor added Successfully");
          this.listDoctor();
          this.closebutton.nativeElement.click();
      },
      err=>{
        alert("Failed to add");
        console.log(err);
      }
    );
  }

  listDoctor(){
    this.apiService.getDoctor().subscribe(
      res=>{
        this.doctorList=res;
        console.log(this.doctorList);
      },
      err=>{
        console.log(err);
      }
    )
  }

  selectedDoctor(id:number){
    this.isDoctorSelected=true;
    this.apiService.getDoctorById(id).subscribe(
      res=>{
        this.doctorRow=res;
        this.doctor.DoctorFormGroup.controls['FirstName'].setValue(this.doctorRow.FirstName);
        this.doctor.DoctorFormGroup.controls['LastName'].setValue(this.doctorRow.LastName);
        this.doctor.DoctorFormGroup.controls['Address'].setValue(this.doctorRow.Address);
        this.doctor.DoctorFormGroup.controls['PhoneNumber'].setValue(this.doctorRow.PhoneNumber);
        this.doctor.DoctorFormGroup.controls['Specialist'].setValue(this.doctorRow.Specialist);
      },
      err=>{
        console.log(err);
      }
    );
  }

  editDoctor(){
    this.apiService.updateDoctor(this.doctorId, this.doctorRow).subscribe(
      res=>{
        this.listDoctor();
        alert("Updated Successfully");
      },
      err=>{
        console.log(err);
      }
    );
  }

  removeDoctor(id:any){
    this.apiService.deleteDoctor(id).subscribe(
      res=>{
        this.listDoctor();
        this.closeDelete.nativeElement.click();
      },
      err=>{
        console.log(err);
      }
    );
  }
}
