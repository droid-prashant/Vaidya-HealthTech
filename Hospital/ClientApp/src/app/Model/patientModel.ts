import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Patient{
    FirstName:string='';
    LastName:string='';
    Address:string='';
    Contact:string='';
    Age:number=0;
    DoctorId:number=0;
    PatientGroup:FormGroup;

    constructor(){
        let formBuilder= new FormBuilder();
        this.PatientGroup= formBuilder.group({
            FirstName:['',Validators.required],
            LastName:['',Validators.required],
            Address:['',Validators.required],
            Contact:['',Validators.compose([Validators.required, Validators.pattern('^(?:98)[0-9]{8,8}$')])],
            Age:['',Validators.required],
            DoctorId:['',Validators.required]

        })
    }
}