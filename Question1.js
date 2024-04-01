function sentence(letters) {
    let words= "";
    //iterating a loop to check the letters
    for (let i = 0; i < letters.length; i++) {
        let caps = letters[i];
        //we have put a condition to check for letters in between A-Z and convert them to lowercase from uppercase
        if (caps>= 'A' && caps <= 'Z') {
            words += caps.toLowerCase();
        } 
        //A condition has been put to ensure that letters between a-z are convert to uppercase form lowercase 
        else if (caps >= 'a' && caps <= 'z') {
            words+= caps.toUpperCase();
        } 
        //The addition assignment operator performs addition on the two operands and assigns the result to the left operand
        else {
            words += caps;
        }
    }
    return words;
}
console.log(sentence("The Quick Brown FOx"));
