import { Injectable } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private ngxTranslate: NgxTranslateService) { }

  setDefaultLang() {
    this.ngxTranslate.setDefaultLang('de');
  }

  use(lang: string) {
    this.ngxTranslate.use(lang);
  }
}
