const {generateFullName} = require('./fullName')


test("generate a full name with label",() => {
  expect(generateFullName('Rodrigo', 'Pereira')).toBe('FullName: Rodrigo Pereira')
})