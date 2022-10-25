var users = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
];
function logPerson(users) {
    console.log("User Name: ".concat(users.name, ", User Age: ").concat(users.age, " User Occupation: ").concat(users.occupation));
}
console.log("Users: ");
users.forEach(logPerson);
