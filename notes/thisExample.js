// Objects methods and this

const marco = {
    name: 'Marco Richetta',
    age: 24,
    greet: function() {
      console.log('hello, my name is', this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)  
    },
}
  
marco.doAddition(1, 4)        // 5 is printed
  
const referenceToAdditon = marco.doAddition
referenceToAdditon(10, 15)   // 25 is printed

// -------

// The value of `this` depends on how the method is called
marco.greet()    // hello, my name is Marco Richetta

/*  
    When calling the method through a reference, 
    the value of this becomes the global object
 */
const referenceToGreet = marco.greet
referenceToGreet()  // hello, my name is undefined

// -------

/*  
    When setTimeout is using the method it is the Javascript engine
    that calls the method and `this` refers to the Timeout object.
 */
setTimeout(marco.greet, 1000) // hello, my name is undefined

/* 
    This creates a new function, where it has bound `this` to point to 
    `marco` independent of where and how the method is being called.
*/
setTimeout(marco.greet.bind(marco), 1000) // hello, my name is Marco Richetta