import * as __ from 'lodash/fp';
import * as _ from 'lodash';
import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { EUserRole, subOnce, User, users$ } from './lib';

type UserInfo = Pick<User, 'id' |  'role' | 'email'>;

// const getUserInfo: (u: User) => UserInfo = __.pick(['id', 'role', 'email']);
// const getUserInfos: (users: User[]) => UserInfo[] = __.map(getUserInfo);

const userInfo$: $$.Observable<UserInfo[]> = users$.pipe(

  // $.map((users: User[]): UserInfo[] =>
  //   users.map(
  //     ({ id, role, email }: User): UserInfo => ({ id, role, email }),
  //   ),
  // ),

  // $.map((users: User[]): UserInfo[] => users.map((user: User): UserInfo => _.pick(user, ['id', 'role', 'email']))),

  // $.map((users: User[]): UserInfo[] => users.map(__.pick(['id', 'role', 'email']))),
  // $.map((users: User[]): UserInfo[] => _.map(users, __.pick(['id', 'role', 'email']))),
  // $.map(__.map(__.pick(['id', 'role', 'email']))),

  // $.map(__.map(getUserInfo)),
  // $.map(getUserInfos),
);

subOnce(userInfo$); /* ? */
