import { createAction } from '@ngrx/store';

export * from './list';
export * from './details';

export const empty = createAction('[Products] empty');

