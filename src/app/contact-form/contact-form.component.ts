import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  // formBuilder: FormBuilder = inject(FormBuilder);

  // signUpForm = this.formBuilder.group({
  //   name: ['', Validators.required],
  //   email: [
  //     '',
  //     [Validators.required, Validators.email, this.forbidenExtensionValidator],
  //   ],
  // });

  // forbidenExtensionValidator(control: FormControl): ValidationErrors | null {
  //   const isValid = control.value.endWith('.com' && '.fr');
  //   return isValid ? null : { extension: { value: control.value } };
  // }

  // onSubmit() {
  //   console.log(this.signUpForm.value);
  // }

  newMessage: Message = {
    lastname: '',
    firstname: '',
    message: '',
    email: '',
    password: '',
  };

  // onSubmit(): void {
  //   // Formulaire envoyé
  //   console.log(this.newMessage);
  // }
  onSubmit(): void {
    console.log('Formulaire envoyé !');
  }
}
