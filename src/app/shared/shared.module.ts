import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatDateFormats, DateAdapter } from '@angular/material/core';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomMatPaginatorIntl } from './custom-mat-paginator-intl';

import { provideNativeDateAdapter } from '@angular/material/core';

import { PIPES } from './pipes';

const MATERIAL = [
  MatTableModule,
  MatButtonModule,
  MatDialogActions,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatRadioModule,
  MatGridListModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule
];

export const LOCAL_DATE_FORMATS: MatDateFormats = {
  parse: {
      dateInput: 'DD.MM.YYYY',
  },
  display: {
      dateInput: 'DD.MM.YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'L',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    ...PIPES
  ],
  exports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    ...PIPES,
    ...MATERIAL
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ...MATERIAL
  ],
  providers: [
    DatePipe,
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
    { provide: MAT_DATE_FORMATS, useValue: LOCAL_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
  ],
})
export class SharedModule {}
