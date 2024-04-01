
function primenumbers(numbers) {
    let prime = [];
    //it has been initialized as it iterates through each loops 
    numbers.forEach((num) => {
        let gap = 0;
        //checks wheather the number in the array is divisible by its self and by two
        for (let i = 1; i <= num; i++) {
            //to check if the remainder is equivalent to zero
            if (num % i === 0) {
                gap++;
            }
        }
        //to check if the factor is eual to 2 and use push to add new items to the array
        if (gap === 2) {
            prime.push(num);
        }
    });
    return prime;
}

console.log(primenumbers([]))