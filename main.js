let result = document.getElementById("result");
let getNumber = document.getElementById("number");

// Display Fizz if %3, Buzz if %5 and FizzBuzz for both.

function fizzBuzz() {
    let number = getNumber.value;
    for (let i = 0; i <= number; i++) {
        if (i == 0) {
            result.innerHTML += i + "<br>";
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            result.innerHTML += i + ": FizzBuzz<br>";
        }
        else if (i % 3 == 0) {
            result.innerHTML += i + ": Fizz<br>";
        } 
        else if (i % 5 == 0) {
            result.innerHTML += i + ": Buzz<br>";
        } 
        else {
            result.innerHTML += i + "<br>";
        }
    }
}