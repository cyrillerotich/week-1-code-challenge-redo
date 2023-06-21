let speed = prompt("please enter speed", "0") //speed input from prompt
let detector

if (speed <= 70) {
    //within the limit

    detector = `Ok`
}
else if (speed > 70) {
    // exceeding the speed limit 

    let demeritPoint = Math.trunc((speed - 70) / 5)
    if (demeritPoint > 12) {
        detector = `license suspended`
    }
    else {
        detector = `points: ${demeritPoint}`
    }
}

console.log(detector) //output

