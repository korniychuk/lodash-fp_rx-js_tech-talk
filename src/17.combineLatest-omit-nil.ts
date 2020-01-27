import * as __ from 'lodash/fp';
import * as _ from 'lodash';
import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { EUserRole, subOnce, users } from './lib';

const userEmails = users.map(__.get('email'));

const users$ = $$.of(userEmails).pipe($.delay(10), $.startWith(null));
const roles$ = $$.of(_.keys(EUserRole)).pipe($.delay(20), $.startWith(undefined));
const someStr$ = $$.of(null, 'Some String');

const res$ = $$.combineLatest([users$, roles$, someStr$]).pipe(
  // $.filter(([lUsers, roles, someStr]) => !!(lUsers && roles && someStr)),
  // $.filter(data => data.every(Boolean)),
  // $.filter(__.every(Boolean)),
);

// without wallaby
res$.subscribe(console.log.bind(console, 'NEXT:'));
