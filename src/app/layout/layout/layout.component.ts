import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/shared/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public currentLanguage = 'ru';
  private storedLanguage = this.storage.getItem('currentLanguage');

  constructor(
    private translate: TranslateService,
    private storage: LocalStorageService
  ) {
    this.setDefaultLanguage();
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
    this.storage.setItem('currentLanguage', language);
  }

  private setDefaultLanguage() {
    const language = this.storedLanguage
      ? this.storedLanguage
      : this.currentLanguage;

    this.currentLanguage = language;
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
