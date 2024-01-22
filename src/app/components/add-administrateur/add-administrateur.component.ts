import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../register/passwordmismatch.directive';
@Component({
  selector: 'app-add-administrateur',
  templateUrl: './add-administrateur.component.html',
  styleUrls: ['./add-administrateur.component.css']
})
export class AddAdministrateurComponent {
  value !: string ; 
  value1!:string ; 
  addAdminForm=this.fb.group ({

    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]], 
    Username : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  },  {
    validators: passwordMatchValidator
  })
constructor(private fb :FormBuilder, private auth:AuthService,private messageService: MessageService, private route:Router){} 

get fullName() { 
  return this.addAdminForm.controls['fullName']; 
}
get email() { 
  return this.addAdminForm.controls['email']; 
}
get password() { 
  return this.addAdminForm.controls['password']; 
}
get Username() { 
  return this.addAdminForm.controls['Username']; 
} 
}