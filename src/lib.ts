import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';

export enum EUserRole {
  Admin    = 'admin',
  Customer = 'customer',
}

export interface User {
  id: number;
  email: string;
  role: EUserRole;

  name?: {
    first?: string;
    last?: string;
  };
  age?: number;
}

export const users: User[] = [
  {
    id: 1,
    email: 'ivan@gmail.com',
    role: EUserRole.Admin,
    name: {
      first: 'Ivan',
      last: 'Petrov',
    },
    age: 20,
  },
];

export const users$ = $$.of(users);
export const user$ = $$.of(users[0]);

export const subOnce = (o$: $$.Observable<any>) => {
  let res: any;
  o$
    .pipe(
      $.first(),
      $.tap(v => res = v),
    )
    .subscribe(
      console.log.bind(console, 'NEXT:'),
      console.log.bind(console, 'ERR:'),
      console.log.bind(console, 'DONE'),
    );
  return res;
};
