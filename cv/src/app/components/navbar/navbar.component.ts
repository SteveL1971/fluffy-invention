import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/views/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  languageSub: Subscription = new Subscription;
  language : string = "Swedish"

  constructor(private languageService: LanguageService ) { }

  ngOnInit(): void {
    this.languageSub= this.languageService.chosenLanguage
    .subscribe(
      (chosenLanguage:string) => {
        this.language = chosenLanguage;
      }
    )
  }

  onChangeLanguage(language: string) {
    this.languageService.setLanguage(language)
  }

  ngOnDestroy(): void {
    this.languageSub.unsubscribe();
  }

}
