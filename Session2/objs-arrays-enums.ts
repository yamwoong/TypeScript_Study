// const person: {
//     name: string;
//     age: number;
// } = {
// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // tuple type
// } = {
//     name : 'woong',
//     age : 20,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// };
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name : 'woong',
    age : 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};


// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}

if(person.role === Role.AUTHOR) {
    console.log('is author');
}