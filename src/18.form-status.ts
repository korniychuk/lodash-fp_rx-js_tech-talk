import * as __ from 'lodash/fp';
import * as _ from 'lodash';
import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { subOnce } from './lib';

enum ENgFormStatus {
  Valid    = 'VALID',
  Invalid  = 'INVALID',
  Pending  = 'PENDING',
  Disabled = 'DISABLED',
}

const status$ = $$.of(ENgFormStatus.Invalid);
// const status$ = $$.of(ENgFormStatus.Valid);
// const status$ = $$.of(ENgFormStatus.Disabled);

const isFormValid$ = status$.pipe(
  $.filter(status => _.includes([ENgFormStatus.Valid, ENgFormStatus.Invalid], status)),
  $.map(status => status === ENgFormStatus.Valid),

  // $.filter(__.includes(__.placeholder, [ENgFormStatus.Valid, ENgFormStatus.Invalid])),
  // $.map(__.isEqual(ENgFormStatus.Valid)),
);

subOnce(isFormValid$); /* ? */
