const test = require('ava')
const one = require('./index')


test('arrays are equal', t => {
	t.is(one, 'one+two')
});