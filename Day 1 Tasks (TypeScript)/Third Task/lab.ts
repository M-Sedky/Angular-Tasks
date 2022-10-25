interface User {
  name: string;
  age: number;
  occupation: string;
}

const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

function logPerson(users: User) {
  console.log(
    `User Name: ${users.name}, User Age: ${users.age} User Occupation: ${users.occupation}`
  );
}

console.log(`Users: `);
users.forEach(logPerson);
