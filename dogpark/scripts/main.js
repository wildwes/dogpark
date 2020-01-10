const Bob = {
  Name: "Bob",
  Weight: 30,
  Breed: "Bulldog",
  Vaccinated: false,
  Age: 0.5
};

const Harry = {
  Name: "Harry",
  Weight: 75,
  Breed: "German Shepherd",
  Vaccinated: true,
  Age: 8
};
const dogsCollection = [];

dogsCollection.push(Bob);
dogsCollection.push(Harry);

const park = {
  LargeArea: [],
  MediumArea: [],
  SmallArea: [],

  name: "Franky Pierce Park"
};
document.querySelector(".parkName").innerHTML = park.name;
const dogHTMLRepresentation = dog => {
  return `<li>${dog.Name}</li>`;
};

for (const dog of dogsCollection) {
  // Only vaccinated dogs can go to the park!
  // If dog is less than one year old, it doesn't have to be vaccinated.
  if (dog.Vaccinated || dog.Age < 1) {
    const dogHTML = dogHTMLRepresentation(dog);

    // If the dog's weight is uder 30lbs then it goes to the small dog area,
    if (dog.Weight <= 30) {
      park.SmallArea.push(dog);
      document.querySelector(".SmallArea").innerHTML += dogHTML;
    }
    // Dog weight between 31lbs-50lbs goes to medium area.
    else if (dog.Weight >= 31 || dog.Weight <= 50) {
      park.MediumArea.push(dog);
      document.querySelector(".MediumArea").innerHTML += dogHTML;
    }
    // if the dog weighs more than 51lbs then it belongs in the large dog are.

    //   dogHTMLRepresentation(dog);
    else park.LargeArea.push(dog);
    document.querySelector(".LargeArea").innerHTML += dogHTML;
  }
}
console.log(park);
