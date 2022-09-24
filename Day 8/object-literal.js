// const skier = {
//     sound,
//     powderYell() {
//       let yell = this.sound.toUpperCase();
//       console.log(`${yell} ${yell} ${yell}!!!`);
//     },
//     speed(mph) {
//       this.speed = mph;
//       console.log("speed:", mph);
//     }
//   };

  function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();
  
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
  }
  
  directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

  const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
  };
  
  const dinner = "mac and cheese";
  
  const backpackingMeals = {
    ...morning,
    dinner
  };
  console.log(backpackingMeals)

  //Class
  class Vacation {
    constructor(destination, length) {
      this.destination = destination;
      this.length = length;
    }
  
    print() {
      console.log(`${this.destination} will take ${this.length} days.`);
    }
  }
  class Expedition extends Vacation {
    constructor(destination, length, gear) {
      super(destination, length);
      this.gear = gear;
    }
  
    print() {
      super.print();
      console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
  }