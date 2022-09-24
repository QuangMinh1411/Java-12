// const sandwich = {
//     bread: "dutch crunch",
//     meat: "tuna",
//     cheese: "swiss",
//     toppings: ["lettuce", "tomato", "mustard"]
//   };
  
//   const { bread, meat } = sandwich;
  
//   console.log(bread, meat);

//   const lordify = ({ firstname }) => {
//     console.log(`${firstname} of Canterbury`);
//   };
  
//   const regularPerson = {
//     firstname: "Bill",
//     lastname: "Wilson"
//   };
  
//   lordify(regularPerson); 

  const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
    spouse: {
      firstname: "Phil",
      lastname: "Wilson"
    }
  };
  const lordify = ({ spouse: { firstname } }) => {
    console.log(`${firstname} of Canterbury`);
  };
  lordify(regularPerson)
