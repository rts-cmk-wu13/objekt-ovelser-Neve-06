let person = {
    firstname: "Tim",
    lastname: "Pyke",
    married: "true",
    age: 48,
    hometown: "Roskilde",
    hobbies: ["history", "writing", "programming" ],
    pet:{
        type: "spooder",
        petname: "man"
    },
    
}

// console.log(person.firstname);
// console.log(person.lastname);

// console.log(person["pet"]);
// console.log(person["petname"]);


person.hobbies.forEach(function(hobby){
    console.log(hobby);
    
})