function mindGame(number) {
    console.log(typeof number)
    if (typeof number !== "number") {
        console.log('Please provide a valid number')
    }
    else if (number <= 0) {
        console.log('please provide a positive number');
    }
    else {
        const result = (((number * 3) + 10) / 2) - 5;
        return result;
    }


}
const result = mindGame(5)
console.log(result);

