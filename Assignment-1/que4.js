let even;
let odd;
let n=100;
for (let i=2 ; i<=n; i++)
{
    for(let j=i ;j<n; j++){


        j=2*i-1;

        i=i+j-1;
        
    }
console.log(i);

}