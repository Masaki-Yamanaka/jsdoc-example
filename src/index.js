// @ts-check

const { add, subtract, divide, multiply } = require('./calculator')

/**
 * Student Name
 * @type {string}
 */
const studentName = 'Jond';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 22]


/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: "aa",
  text: 'hello',
}

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total width a doller sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string | number} [age] - Student age(optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */

const student = {
  id: 1,
  name: 'Doe',
  age: 20,
  isActive: true
}

/**
 * Class to create a person obj
 */
class Person {
  /**
   * 
   * @param {object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Person name
     */
    this.name = personInfo.name
    /**
     * @property {string} age Person age
     */
    this.age = personInfo.age
  }
  /**
   * @property {Function} greet A greet with the name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello, ${this.name}, ${this.age}`)
  }
}

/**
 * See {@link Person}
 */

const person1 = new Person({
  name: 'test',
  age: 55
})


console.log(add(20, 20))