// the start and end are used to iterate values in between 
function arrays(start, end) {
    let numbers = [];
    //for is used to start the loop and i is pushed to the numbers array
    for (let i = start; i <= end; i++) {
        numbers.push(i)
    }
    return numbers
}
//the arrays are then called 
 console.log(arrays(-4,7))