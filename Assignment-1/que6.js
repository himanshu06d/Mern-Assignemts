var num=12;
var lastDigit=0;
var sumOfAllDigits=0;
while(num!=0)
{
lastDigit= num % 10;
sumOfAllDigits = sumOfAllDigits + lastDigit;
num = parseInt(num/10);
}
console.log(sumOfAllDigits);