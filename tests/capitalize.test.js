import capitalize from '../src/capitalize.js';

import { strict as assert } from 'assert';

  assert.strictEqual('hello', 'hello');

  assert.equal(capitalize('hello'), 'Hello');
  
  console.log('Все тесты пройдены!');
