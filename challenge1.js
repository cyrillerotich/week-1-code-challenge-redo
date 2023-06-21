let marks = prompt ("Please enter your marks",  "0") // marks input from prompt
let grade // grade from mark input

// marks out of range
if (marks > 100 && marks < 0){
    marks = prompt ("Please enter valid marks",  "0")
}

if (marks >79){
    grade = `A`
}
else if (marks >= 60 && marks <= 79){
    grade = `B`
}
else if (marks > 49 && marks <= 59){
    grade = `C`
}
else if (marks >= 40 && marks <= 49){
    grade = `D`
}
else if (marks < 40){
    grade = `E`
}

// output
console.log(`this is your grade ${grade}`)