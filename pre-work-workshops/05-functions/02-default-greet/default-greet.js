// YOUR CODE BELOW
// function defaultGreet (firstName , lastName){
//     if (lastName === undefined) {
//         lastName = "Doe"
//     }
    
//     return "Hi " + firstName + ' ' + lastName + "!"
// } 

function defaultGreet(firstName, lastName="Doe"){
    return `Hi ${firstName} ${lastName}!`
}

console.log(defaultGreet("farman"))