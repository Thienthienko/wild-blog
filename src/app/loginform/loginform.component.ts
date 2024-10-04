import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface loginInfo {
  email: string;
  password: string;
}
@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  loginInfo: loginInfo = {
    email: '',
    password: '',
  };

  submissionMessage: string = '';

  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.submissionMessage = 'validé !';
    } else {
      this.submissionMessage = 'Les champs ne sont pas valides';
    }
  }
}
