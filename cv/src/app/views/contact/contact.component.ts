import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus, sendForm } from '@emailjs/browser';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  @ViewChild('f') emailForm!: NgForm;
  sent: boolean = false;
  public contactForm: FormGroup = new FormGroup({});
  // public userRoles: string[] = [];
  languageSub: Subscription = new Subscription;
  language: string = "Swedish";

  constructor(private fb: FormBuilder,
              private languageService: LanguageService) {}
  // constructor() {}

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(300)]],
    })

    this.languageSub= this.languageService.chosenLanguage
    .subscribe(
      (chosenLanguage:string) => {
        this.language = chosenLanguage;
      }
    )

    this.language=this.languageService.getLanguage();
  }

  get fullName() { return this.contactForm.get('fullName') as FormControl; }
  get email() { return this.contactForm.get('email') as FormControl; }
  get subject() { return this.contactForm.get('subject') as FormControl; }
  get message() { return this.contactForm.get('message') as FormControl; }

  onSubmit() {

  }

  public sendEmail(e: Event) {
    e.preventDefault();
    this.sent=true;

    const email = {
      fullname: this.emailForm.value.fullName,
      email: this.emailForm.value.email,
      subject: this.emailForm.value.subject,
      message: this.emailForm.value.message
    }

    emailjs.send(environment.emailjsService, environment.emailjsTemplate, email, environment.emailjsPublicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnDestroy(): void {
    this.languageSub.unsubscribe();
  }

}


