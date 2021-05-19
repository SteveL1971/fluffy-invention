import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({});
  // public userRoles: string[] = [];

  constructor(private fb: FormBuilder) {}
  // constructor() {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(300)]],
    })
  }

  get fullName() { return this.contactForm.get('fullName') as FormControl; }
  get email() { return this.contactForm.get('email') as FormControl; }
  get subject() { return this.contactForm.get('subject') as FormControl; }
  get message() { return this.contactForm.get('message') as FormControl; }

  onSubmit() {

  }

}


