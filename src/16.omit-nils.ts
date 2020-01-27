import * as __ from 'lodash/fp';
import * as _ from 'lodash';
import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { EUserRole, subOnce, User, usersWithNil$ } from './lib';

// const omitNils: <T>(v: (T | null | undefined)[]) => T[] = __.filter(_.negate(__.isNil));

const users$: $$.Observable<User[]> = usersWithNil$.pipe(

  $.map((users: (User | null | undefined)[]): User[] => users.filter((v): v is User => v !== null && v !== undefined)),
  // $.map((users: (User | null | undefined)[]): User[] => users.filter((v): v is User => v != undefined)),

  // $.map((users: (User | null | undefined)[]): User[] => users.filter((v): v is User => !_.isNil(v))),

  // $.map((users: (User | null | undefined)[]): User[] => users.filter(_.negate(__.isNil) as (v: unknown) => v is User)),
  // $.map(__.filter(_.negate(__.isNil))),
  // $.map(omitNils),
);

subOnce(users$); /* ? $.map(v => v && v.email) */
