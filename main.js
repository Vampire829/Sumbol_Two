//Sumbol

const sym = Symbol()
const symTwo = Symbol()

console.log(sym === symTwo)
// false
const secondaryId = Symbol()

const user = {
  'id': 193,
  'name': 'Ольга',
  [secondaryId]: 'olga-1'
}

for (const prop in user) {
  console.log(prop, user[prop])
}
// id 193
// name Ольга

console.log(user[secondaryId])
// olga-1

const secondaryId = Symbol()

const user = {
  'id': 193,
  'name': 'Ольга',
  [secondaryId]: 'olga-1'
}

console.log(Symbol.keyFor(secondaryId))
// undefined

const newSym = Symbol.for('registryKey')
const newestSym = Symbol.for('registryKey')
console.log(newSym === newestSym)
// true

user[newSym] = 'hello'
console.log(Symbol.keyFor(newSym))
// registryKey