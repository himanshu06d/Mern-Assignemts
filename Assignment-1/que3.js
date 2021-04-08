let number1=24;
let hcf;
let number2=18;
for (let i=1;i<=number1 && i<=number2;i++)
{
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
console.log(hcf);
