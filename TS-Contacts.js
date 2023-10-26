"use strict";
const persons = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Иван Иванов',
        age: 29,
        group: 'Друзья',
    },
    {
        name: 'Петр Петров',
        age: 16,
        group: 'Семья',
    },
    {
        name: 'Андрей Андреев',
        age: 25,
        group: 'Коллеги',
    },
    {
        name: 'Сергей Сергеев',
        age: 29,
        role: 'Коллеги',
    },
];
const isAdmin = (person) => {
    return 'role' in person;
};
const isUser = (person) => {
    return 'group' in person;
};
const logPerson = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
