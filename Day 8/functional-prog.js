let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
  };

  const rateColor = (color, rating) => ({
    ...color,
    rating
  });

  // console.log(rateColor(color_lawn, 5).rating);
  console.log(rateColor(color_lawn,4));
  
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
// const addColor = (title, array) => array.concat({ title });
const addColor = (title,array)=>[...array,{title}]
let newList = addColor('Green',list);
console.log(newList)


const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
const wSchools = schools.filter(school => school[0] === "W");
console.log(wSchools);

const cutSchool = (cut, list) => list.filter(school => school !== cut);
console.log(cutSchool("Washington & Liberty", schools).join(", "));


// const highSchools = schools.map(school => `${school} High School`);
// console.log(highSchools.join("\n"));

const highSchools = schools.map(school => ({ name: school }));
console.log(highSchools);


// const editName = (oldName, name, arr) =>
//   arr.map(item => {
//     if (item.name === oldName) {
//       return {
//         ...item,
//         name
//       };
//     } else {
//       return item;
//     }
//   });

  let schoolEdit = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
  ];

  const editName = (oldName, name, arr) =>arr.map(item => (item.name === oldName ? { ...item, name } : item));

let updatedSchools = editName("Stratford", "HB Woodlawn", schoolEdit);
console.log(updatedSchools)


const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);


//Array to Object
const colors = [
    {
      id: "xekare",
      title: "rad red",
      rating: 3
    },
    {
      id: "jbwsof",
      title: "big blue",
      rating: 2
    },
    {
      id: "prigbj",
      title: "grizzly grey",
      rating: 5
    },
    {
      id: "ryhbhsl",
      title: "banana",
      rating: 1
    }
  ];

  const hashColors = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
    return hash;
  }, {});
  
  console.log(hashColors);

const colors2 = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors2.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);

console.log(uniqueColors);
