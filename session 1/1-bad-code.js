/**
 * let's understand bad code so we can recognize it and don't call a good code bad
*/

// Bad naming
// -> Object: Upper level abstraction must be descriptive to related domain/module/database
class UserDatabase {
    name() { }
    customerAge() { }
}
function connectionOff() { }
function sortList() { }
function socketConnectionOff() { }
function sortUserList() { }
// -> Number|String: describe the value
const x = ''
const abc = ''
const last = ''
const first = ''
const userName = ''
const sortedList = []
// -> Boolean : describe the state
const state = true
const toggle = false
const isUserActive = true
const isUserAdmin = false
// Not expressive class/function
// -> meaningful name
// -> immutable
// -> single responsibility
// -> pure function
// -> self explanatory


// Long parameter list
// -> less than 3 parameters
// -> use object instead of long parameter list

// Not DRY
// -> Don't repeat yourself
// -> Don't write the same code in multiple places

// Not SOLID
// -> Single Responsibility Principle
// -> Open/Closed Principle
// -> Liskov Substitution Principle
// -> Interface Segregation Principle
// -> Dependency Inversion Principle

// Rigidity: Writing code out of your domain or related part
// Fragility: Other parts of the code break when you try to change the code
// Immobility: Hard to extract or move code
// Viscosity: Easy to apply tricks instead of following existing patterns


// Side effect: When you fall in bad code, just accept the reality and try to make it better 