import * as __ from 'lodash/fp';
import * as _ from 'lodash';
import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { EUserRole, subOnce, User, user$ } from './lib';

type UserInfo = Pick<User, 'id' |  'role' | 'email'>;

// const getUserInfo: (u: User) => UserInfo = __.pick(['id', 'role', 'email']);
const userInfo$: $$.Observable<UserInfo> = user$.pipe(
  // $.map(({ id, role, email }: User): UserInfo => ({ id, role, email })),

  // $.map((user: User): UserInfo => _.pick(user, ['id', 'role', 'email'])),

  // $.map(__.pick(['id', 'role', 'email'])),
  // $.map(getUserInfo),
);

subOnce(userInfo$); /* ? */
