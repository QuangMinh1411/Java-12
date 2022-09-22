function isPrime(num){
    let res = true;
    if(num==2)
        res = true;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            res=false;
            break;
        }
    }
    return res;
}

console.log(isPrime(11));