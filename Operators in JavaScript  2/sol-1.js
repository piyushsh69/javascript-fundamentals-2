/*
The ternary operator, also known as the conditional operator, is a concise way to write a simple if-else statement in a single line.It has the following syntax -

    (condition ? expression if condition is true : expression if condition is false;)
*/

const num = 6;

(num % 2 == 0) ? console.log(num, 'is even number') : console.log(num, 'is odd number');