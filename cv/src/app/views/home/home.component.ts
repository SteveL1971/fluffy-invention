import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languageSub: Subscription = new Subscription;
  language: string = "Swedish";

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
