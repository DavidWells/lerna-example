import test from 'ava';
const one = require('./index')


test('arrays are equal', t => {
	t.is(one, 'one')
});