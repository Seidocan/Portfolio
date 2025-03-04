import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false,
  }

  mailTest = false;

  post = {
    endPoint: 'https://www.marco-marrocu.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (!this.contactData.privacy) {
      ngForm.controls['privacy'].markAsTouched();
    }
    if (ngForm.submitted && ngForm.form.valid && this.contactData.privacy && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            const dialog = document.getElementById('successDialog');
            if (dialog) {
              dialog.style.display = 'flex';
            }

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  closeDialog() {
    const dialog = document.getElementById('successDialog');
    if (dialog) {
      dialog.style.display = 'none';
    }
  }

  isAllValid() {
    return (
      this.contactData.name &&
      this.contactData.email &&
      this.contactData.message?.length >= 10 &&
      this.contactData.privacy
    );
  }
}