import * as __ from 'lodash/fp';
import * as $ from 'rxjs/operators';
import { EUserRole, subOnce, user$ } from './lib';

const role$ = user$.pipe($.pluck('role'));

// const isAdminRole = __.isEqual(EUserRole.Admin);
const isAdmin$ = role$.pipe(
  // $.map((role: EUserRole): boolean => role === EUserRole.Admin),
  // $.map(role => role === EUserRole.Admin),
  // $.map(v => v === EUserRole.Admin),
  // $.map(__.isEqual(EUserRole.Admin)),
  // $.map(isAdminRole),
);

subOnce(isAdmin$); /* ? */
