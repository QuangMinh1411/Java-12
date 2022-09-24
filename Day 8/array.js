function maxMin(arr){
    let min = arr[0];
    let max = arr[0];
    arr.forEach(item => {
        if(item>max) max = item;
        if(item<min) min = item;
    });
    return {
        min,
        max
    }
}
console.log(maxMin([2,1,4,7,5,9]));

const checkElementExist = (arr,num)=>arr.includes(num)?true:false;
console.log(checkElementExist([2,1,5,3],0));

const getElementGreater = (arr,num)=>arr.filter(x=>x>num);
console.log(getElementGreater([1,2,3,4,5],3));

const randomHexCode = ()=>{
    const letters = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    return "#"+letters.map(l=>letters[`${Math.floor(Math.random()*letters.length)}`]).slice(0,6).join('')
}
console.log(randomHexCode());

const randomRGB = ()=>{
    const randomNum = ()=>Math.floor(Math.random()*256);
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}
console.log(randomRGB());