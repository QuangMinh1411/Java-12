let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
//1. In thong tin
const print = (arr)=>{
    arr.forEach(e => {
        console.log(`${e.name}-${e.price}-${e.brand}-${e.count}\n`)
    });
}
print(products);

//2. Tong tien
const total = (arr)=>
    arr.reduce((sum,a)=>sum+=a.price*a.count,0)
console.log(total(products));
//3. Tim Apple
const filter = (arr,str)=>{
    return arr.filter(item=>item.brand.includes(str));
}
console.log(filter(products,'Apple'));
//4. Tim sp >200000
const filterPrice = (arr,p)=>{
    return arr.filter(item=>item.price>p);
}
console.log(filterPrice(products,20000000));

//5 Tim sp Pro
const filterPro = (arr,str)=>{
    return arr.filter(item=>item.name.toLowerCase().includes(str.toLowerCase()));
}
console.log(filterPro(products,'pro'));

//6. 
//8. Sap xep theo count
// products.sort((a,b)=>{
//     if(a.count<b.count) return 1;
//     else if(a.count>b.count) return -1;
//     else return 0
// })
// print(products)
