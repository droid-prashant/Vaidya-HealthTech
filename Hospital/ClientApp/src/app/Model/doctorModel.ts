import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Doctor{
    public FirstName:string="";
    public LastName:string="";
    public Address:string="";
    public PhoneNumber:string="";
    public Specialist:string="";
    public DoctorFormGroup:FormGroup

    constructor(){
        let formBuilder:FormBuilder=new FormBuilder();
        this.DoctorFormGroup=formBuilder.group({
            FirstName:['',[Validators.required]],
            Address:['',[Validators.required]],
            LastName:['',[Validators.required]],
            PhoneNumber:['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])],
            Specialist:['',[Validators.required]]
        })
    }
}