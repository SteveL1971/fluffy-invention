import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, OnDestroy {
  languageSub: Subscription = new Subscription;
  language: string = "";

  constructor(private languageService: LanguageService ) { }

  ngOnInit(): void {

    this.languageSub= this.languageService.chosenLanguage
    .subscribe(
      (chosenLanguage:string) => {
        this.language = chosenLanguage;
      }
    )

    this.language=this.languageService.getLanguage();

  }

  ngOnDestroy(): void {
    this.languageSub.unsubscribe();
  }

}
