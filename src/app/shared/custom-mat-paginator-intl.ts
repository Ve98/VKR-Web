import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  constructor(private translateService: TranslateService) {
    super();
    this.getTranslations();
    this.translateService.onLangChange.subscribe(() => {
      this.getTranslations();
    });
  }

  getTranslations() {
    this.translateService
      .get([
        'paginator.itemsPerPage',
        'paginator.nextPage',
        'paginator.previousPage',
        'paginator.range',
      ])
      .subscribe((translation) => {
        this.itemsPerPageLabel = translation['paginator.itemsPerPage'];
        this.nextPageLabel = translation['paginator.nextPage'];
        this.previousPageLabel = translation['paginator.previousPage'];
        this.firstPageLabel = translation['paginator.firstPageLabel'];
        this.lastPageLabel = translation['paginator.lastPageLabel'];
        this.changes.next();
      });
  }

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    const inffix = this.translateService.instant('paginator.range');

    if (length === 0 || pageSize === 0) {
      return `0 ${inffix} ${length}`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `${page + 1} ${inffix} ${amountPages}`;
  };
}
