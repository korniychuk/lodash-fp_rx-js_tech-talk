import * as __ from 'lodash/fp';
import * as _ from 'lodash';
import * as $ from 'rxjs/operators';
import { EUserRole, subOnce, User, users$ } from './lib';

const filterAdminUsers = __.filter({ role: EUserRole.Admin });
const admins$ = users$.pipe(
  // $.map((users: User[]): User[] => users.filter(user => user.role === EUserRole.Admin)),

  // $.map((users: User[]): User[] => _.filter(users, user => user.role === EUserRole.Admin)),
  // $.map((users: User[]): User[] => _.filter(users, { role: EUserRole.Admin })),

  // $.map(__.filter({ role: EUserRole.Admin })),

  // $.map(filterAdminUsers),
);

subOnce(admins$); /* ? $.map(v => v.role) */
