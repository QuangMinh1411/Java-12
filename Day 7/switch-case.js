const ex1 = (day)=>{
    let res = "";
    switch(day){
        case 0:
            res = "Sunday"
            break;
        case 1:
            res = "Monday"
            break;
        case 2:
            res = "Tuesday"
            break;

        case 3:
            res = "Wednesday"
            break;

        case 4:
            res = "Thursday"
            break;


        case 5:
            res = "Friday"
            break;
        case 6:
            res = "Saturday"
            break;
        default:
            res = "Undefined"
            break;
    }
    return res;
}

console.log(ex1(0));