import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  newMessage: Message = {
    lastname: '',
    firstname: '',
    email: '',
    content: '',
  };

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.newMessage);
  }
  // onSubmit(): void {
  //   console.log('Formulaire envoyé !');
  // }
}
