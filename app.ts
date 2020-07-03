//const person {
//  name: string;
//  age: number;
//} = {
const person = {
  name: 'John', 
  age: 30,
  hobbies: ['Sports', 'Cookiong']
}

let favoriteActivities: string[];
favoriteActivities = ['Sprots'];



console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}