import * as __ from 'lodash/fp';
import * as $ from 'rxjs/operators';
import { EUserRole, subOnce, User, user$ } from './lib';

// const isAdminUser = __.flow(__.get('role'), __.isEqual(EUserRole.Admin));
// const isAdminUser: (u: User) => boolean = __.flow(__.get('role'), __.isEqual(EUserRole.Admin));
const isAdmin$ = user$.pipe(
  $.map((user: User): boolean => user.role === EUserRole.Admin),

  // $.map(user => user.role === EUserRole.Admin),
  // $.map(v => v.role === EUserRole.Admin),
  // $.map(({ role }) => role === EUserRole.Admin),

  // $.map(__.isEqual(EUserRole.Admin)), // <-- fail

  // $.map(__.flow(__.get('role'), __.isEqual(EUserRole.Admin))),
  // $.map(isAdminUser),
);

subOnce(isAdmin$); /* ? */
