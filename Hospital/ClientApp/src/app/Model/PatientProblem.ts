import { FormBuilder, FormGroup, Validators } from "@angular/forms"

export class Problem{
    public ProblemList:Problems[]=[]
    public PatientId:number=0;
}

export class Problems{
    public Description:string=''
    public ProblemForm:FormGroup

    constructor(){
        let formBuilder=new FormBuilder();
        this.ProblemForm= formBuilder.group({
            Description:['',Validators.required]
        });
    }
}