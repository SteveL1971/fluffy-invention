import { Component } from '@angular/core';
import { LanguageService } from './views/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LanguageService]
})
export class AppComponent {
  title = 'cv';
}
