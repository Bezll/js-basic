
// Lexical scope (static scope)
// Global scope - Defined otside of all code bocks
// Local scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

//Global Scope (varOne)
     //local scope (varTwo)
        //local scope (varFour)
     //local scope (varThree)



let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log()
}

console.log(varTwo);



