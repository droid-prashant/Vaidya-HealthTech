import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Doctor } from "../Model/doctorModel";
import { Medication } from "../Model/Medication";
import { Patient } from "../Model/patientModel";
import { Problem, Problems } from "../Model/PatientProblem";
@Injectable(
    {
        providedIn:'root'
    }

)                                           
export class ApiService{
    constructor(private _http:HttpClient){}

    postDoctor(doctorParam: Doctor):Observable<any>{
        return this._http.post(environment.api_url+"/Doctor",doctorParam,{responseType:'json'});
    }

    getDoctor():Observable<any>{
        return this._http.get(environment.api_url+"/Doctor",{responseType:'json'});
    }

    getDoctorById(id:number):Observable<any>{
        return this._http.get(environment.api_url+"/Doctor/"+id,{responseType:'json'});
    }

    updateDoctor(id:number,doctor:Doctor):Observable<any>{
        return this._http.put(environment.api_url+"/Doctor/"+id,doctor,{responseType:'json'})
    }

    deleteDoctor(id:number):Observable<any>{
        return this._http.delete(environment.api_url+"/Doctor/"+id,{responseType:'json'});
    }

    postPatient(patient:Patient):Observable<any>{
        return this._http.post(environment.api_url+"/Patient",patient,{responseType:'json'});
    }

    getPatient():Observable<any>{
        return this._http.get(environment.api_url+"/Patient",{responseType:'json'});
    }
    getPatientById(id:number):Observable<any>{
        return this._http.get(environment.api_url+"/Patient/"+id,{responseType:'json'})
    }
    postPatientProblem(problem:Problem):Observable<any>{
        return this._http.post(environment.api_url+"/PatientProblem",problem,{responseType:'json'});
    }

    postMedication(medication:Medication):Observable<any>{
        return this._http.post(environment.api_url+"/Medication",medication,{responseType:'json'});
    }
}