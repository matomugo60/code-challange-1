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


// Defining variable carSpeedDetector and setting it as a function for argument carSpeed 

function carSpeedDetector(carSpeed) {
    const speedLimit = 70
    const speedRate = 5

// If statement to print Ok if carspeed is below 70
    if (carSpeed <= 70) {
        return "OK"
    }
// Variable declaration for excessCarSpeed to be used in the function declaration that prints License Suspended
    const excessCarSpeed = carSpeed - speedLimit;

    let demeritPoints = 0;
    //Using for statement to set values to be used in excessSpeed
    for( let i=0; i < excessSpeed; i+= speedRate ) {
        demeritPoints += 1
        // If statement to return License Suspended using demeritPoints > 12
        if(demeritPoints > 12) {
            return "Licence Suspended"; 
        }
    }
     // A return message indicating the Points value
    return `Points: ${demeritPoints}`;
}

// Using console.log to print the result
console.log (carSpeedDetector (57));


// Defining variable grossSalary and setting it as a function for payCheck and totalDeductions
var grossSalary = function (payCheckMonthly = 24000 - totalDeductions ) {
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













