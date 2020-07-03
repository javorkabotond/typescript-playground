//const person: {
//  name: string;
//  age: number;
//  hobbies: string[];
//  role: [number, string];
//} = {
//  name: 'John', 
//  age: 30,
//  hobbies: ['Sports', 'Cookiong'],
//  role: [2,'author']
//};

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: 'John', 
  age: 30,
  hobbies: ['Sports', 'Cookiong'],
  role: Role.ADMIN
};


///person.role.push('admin');
//person.role[1] = 10;

//person.role = [0,'admin', 'user'];

let favoriteActivities: any[];
favoriteActivities = ['Sprots',5];

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}