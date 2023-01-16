import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/Model/Medication';
import { Patient } from 'src/app/Model/patientModel';
import { Problem, Problems } from 'src/app/Model/PatientProblem';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient = new Patient();
  medication: Medication= new Medication();
  problemArray= new Problem();
  problem:Problems= new Problems()
  doctorList: any;
  doctorId: any;
  patientList: any;
  patientRow:Patient=new Patient();
  doctorFname: any;
  doctorLname: any;
  isDoctorSelected:boolean=true;
  docId: any;
  patientId: number=0;
  isProblemAdded:boolean=false;
  constructor(private _service: ApiService) {}

  ngOnInit(): void {
    this.listPatient();
    this.listDoctor();
  }

  addPatient() {
    this._service.postPatient(this.patient.PatientGroup.value).subscribe(
      res => {
        alert("Patient added successfully");
        this.patient.PatientGroup.reset();
        this.patient=new Patient();
      },
      err => {
        console.log(err);
      }
    );
  }

  listPatient() {
    this._service.getPatient().subscribe(
      res => {
        this.patientList = res;
        console.log(this.patientList);
      },
      err => {
        console.log(err);
      }
    );
  }

  listPatientRow(id:number) {
    this._service.getPatientById(id).subscribe(
      res => {
        this.patientRow = res;
        this.patient.PatientGroup.controls['FirstName'].setValue(this.patientRow.FirstName);
        this.patient.PatientGroup.controls['LastName'].setValue(this.patientRow.LastName);
        this.patient.PatientGroup.controls['Address'].setValue(this.patientRow.Address);
        this.patient.PatientGroup.controls['Age'].setValue(this.patientRow.Age);
        this.patient.PatientGroup.controls['FirstName'].setValue(this.patientRow.FirstName);
        this.patient.PatientGroup.controls['Contact'].setValue(this.patientRow.Contact);

        this.docId=res.Doctor.DoctorId;
        console.log(this.patientRow);
      },
      err=>{
        console.log(err);
      }
    );
  }

  addPatientProblem(){
    this.problemArray.ProblemList.push(this.problem.ProblemForm.value);
    this.problem.ProblemForm.reset();
    this.isProblemAdded=true;
  }

  onProblemSubmit(){
    this.problemArray.PatientId=this.patientId;
    this._service.postPatientProblem(this.problemArray).subscribe(
      res=>{
        alert("Problems Added Successfully.")
        this.problem.ProblemForm.reset();
        this.problemArray= new Problem();
        this.isProblemAdded=false;
      },
      err=>{
        console.log(err);
      }
    );
  }

  listDoctor() {
    this._service.getDoctor().subscribe(
      res => {
        this.doctorList = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  onDoctorChange(event: any) {
    this.doctorId = event.target.value;
  }

  fetchId(id:number){
    this.patientId=id
  }
}
