import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AccountService } from 'src/app/services/account.service';
// import { AlertService } from 'src/app/services/alert.service';
// import { first } from 'rxjs/operators';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 public form!:FormGroup;
  loading = false;
  submitted = false;
  constructor(
    public formBulider : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    // private accountService : AccountService,
    // private alertService : AlertService
  ) { }

  ngOnInit(): void {
    this.form = this.formBulider.group({
      firstName:['' , [Validators.required , Validators.maxLength(10)]],
      lastName: ['' , [Validators.required , Validators.maxLength(10)]],
      userName:['' , [Validators.required , Validators.maxLength(15)]],
      email:['' , [Validators.required, Validators.minLength(6) , Validators.email]],
      password:['' , Validators.required],
      confirmPassword: ["",Validators.required]

    },
    {
      validator :  MustMatch("password", "confirmPassword")
    }
    )
  }
  get firstName() {
    return this.form!.get('firstName');
  }
  get lastName() {
    return this.form!.get('lastName');
  }
  get userName() {
    return this.form!.get('userName');
  }

  get email() {
    return this.form!.get('email');
  }
  get password() {
    return this.form!.get('password');
  }
  get confirmPassword() {
    return this.form!.get('confirmPassword');
  }

  
  get f() { return this.form!.controls; }

  onSubmit() {
    debugger;
      this.submitted = true;

      // stop here if form is invalid
      if (this.form!.invalid) {
          return;
      }
      localStorage.setItem( 'User' , JSON.stringify(this.form.value))
      this.router.navigate(['../login'], { relativeTo: this.route });
  }

}


export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
