const { generateFullName, generateLastName } = require('./fullName');

test('generate the full name with label', () => {
	expect(generateFullName('Rodrigo', 'Pereira')).toBe(
		'FullName: Rodrigo Pereira'
	);
});

test('generate the last name with label', () => {
	expect(generateLastName('Pereira')).toBe('LastName: Pereira');
});
