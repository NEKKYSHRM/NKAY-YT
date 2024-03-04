// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// const fahrenheitToCelsius = fahreheit => (fahreheit-32)* 5/9;

// console.log(celsiusToFahrenheit(37));
// console.log(fahrenheitToCelsius(55));

// Question no. 3

function authenticateUser(username, password) {
    let validUsername = "nkay111"
    let validPassword = "contentcreator"

    if(username === validUsername  && password === validPassword) {
        return true
    }
    else
    return false
}

console.log(authenticateUser("aman", "123"));
console.log(authenticateUser("nkay111", "contentcreator"));