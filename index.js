// Defining a function (gradeCalculator) to set it as a function for the arguments score and total.

let gradeCalculator = function (score, total) {
    // Setting the letter grades to be used for different scores.

    let percentage = (score / total) * 100
    let letterGrade = " "

    // Using if-else and else-if statements to return different grade scores.

    if (percentage >= 79) {
        letterGrade = "A"
    } else if (percentage >= 60) {
        letterGrade = "B"
    } else if (percentage >= 59) {
        letterGrade = "C"
    } else if (percentage >= 40) {
        letterGrade = "D"
    } else { 
        letterGrade = "F"
    }
    // A return message indicating the letter grade, score obtained and the string ('You have scored'). (+) symbol is used to join the string to the letter grade and score.
    return 'You have scored' + " " + letterGrade + " " + '(' + percentage + ')' + '%'
}

// Using variable result to call gradeCalculator by using 54 as the score obtained and 100 as the total score.
let result = gradeCalculator (54, 100)

// Using console.log to display the result.
console.log (result)


// Defining variable speedDetector and setting it as a function for argument speed which has a value of 70 and demerit.

let speedDetector = function (speed = 70, demerit) {
    // Setting variable carSpeed to contain speed and setting the value of demerit.
    let carSpeed = speed
    demerit = " "
// Using else-if statements to return different outcomes.

    if (carSpeed <= 70) {
        demerit = "Ok"
    } else if (carSpeed >= 75) {
        demerit = "Points : 1"
    } else if (carSpeed >= 85) {
        demerit = "Points : 2"
    } else if (carSpeed >= 90) {
        demerit = "Points : 3"
    } else if (carSpeed >= 95) {
        demerit = "Points : 4"
    } else if (carSpeed >= 100) {
        demerit = "Points : 5"
    } else if (carSpeed >= 105) {
        demerit = "Points : 6"
    } else if (carSpeed >= 110) {
        demerit = "Points : 7"
    } else if (carSpeed >= 115) {
        demerit = "Points : 8"
    } else if (carSpeed >= 120) {
        demerit = "Points : 9"
    } else if (carSpeed >= 125) {
        demerit = "Points : 10"
    } else if (carSpeed >= 130) {
        demerit = "Points : 11"
    } else if (carSpeed >= 135) {
        demerit = "Points : 12"
    } else {
        demerit = "License suspended"
    }
    // A return message indicating the speed and value of demerit
    return 'Speed :'  +  speed  + '--' + 'Status--'  +  demerit
}
// Using variable movement to call function speedDetector and using 91 as the speed covered.
let movement = speedDetector(77)
// Using console.log to print the result
console.log(movement)


// Defining variable grossSalary and setting it as a function for payCheck and totalDeductions
var grossSalary = function (payCheckMonthly = 24000, totalDeductions ) {
    var totalDeductions = deductionNSSF + deductionKRA + deductionNHIF
    var deductionNSSF = (payCheckMonthly * 6) / 100
    var deductionKRA = (payCheckMonthly * 10) / 100
    var deductionNHIF = 700
// Applying if else and else if statements to bring about different outcomes to the grossSalary
    if (payCheckMonthly <= 24000) {
        deductionNSSF  
        deductionKRA = (payCheckMonthly * 10) / 100
        deductionNHIF = 700
    } else if (payCheckMonthly >=24001) {
        deductionNSSF 
        deductionKRA = (payCheckMonthly * 25) / 100
        deductionNHIF = 900
    } else if(payCheckMonthly >= 32333) {
        deductionNSSF
        deductionKRA = (payCheckMonthly * 30) / 100
        deductionNHIF = 100

    }

}
// Using variable netSalary to call grossSalary with the value of 26700 on payCheckMonthly
let netSalary = grossSalary (26700)
// Printing the result 
console.log(netSalary)