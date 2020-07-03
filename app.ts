const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'John', 
  age: 30,
  hobbies: ['Sports', 'Cookiong'],
  role: [2,'author']
};


///person.role.push('admin');
//person.role[1] = 10;

//person.role = [0,'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sprots'];

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}