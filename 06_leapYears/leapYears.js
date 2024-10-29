let y = 400;

const leapYears = function(year) {
// divisible by 4, not divisible by 100, divisible by 400
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
    return true;
    } else {
        return false;
    }
};


let question = leapYears(y);

console.log(question);


// Do not edit below this line
module.exports = leapYears;
