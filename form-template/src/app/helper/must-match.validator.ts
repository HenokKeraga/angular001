import { FormGroup } from "@angular/forms";

export function MustMatch (controlName:string,matchingControlName:string){
    return (formGroup:FormGroup )=>{

        const password=formGroup.controls[controlName]
        const confirmPassword=formGroup.controls[matchingControlName]

        if(!password||!confirmPassword)
        return null

        if(confirmPassword.errors && !confirmPassword.errors.mustMatch)
        return null

        if(password!=confirmPassword){
         confirmPassword.setErrors({mustMatch:true})
     
        }else{
            confirmPassword.setErrors(null)
        }

    }
}