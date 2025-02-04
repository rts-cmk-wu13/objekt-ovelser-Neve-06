let person = {
    firstname: "Tim",
    lastname: "Pyke",
    married: "true",
    age: 48,
    hometown: "Roskilde",
    hobbies: ["history", "writing", "programming" ],
    pet:{
        type: "spooder",
        name: "man"
    },
    
}

person.hobbies.forEach(function(hobby){
    console.log(hobby);
    
})

console.log(person.pet.type);
console.log(person.pet.name);
