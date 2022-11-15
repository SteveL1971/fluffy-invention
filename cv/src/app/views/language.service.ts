import { Subject } from "rxjs";

export class LanguageService {
    language:string="Swedish"
    chosenLanguage = new Subject<string>();

    setLanguage(language: string) {
        this.language=language;
        this.chosenLanguage.next(language);
    }

    getLanguage() {
        return this.language;
    }
}