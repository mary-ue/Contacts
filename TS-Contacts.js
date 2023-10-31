"use strict";
const persons = [
    {
        type: 'admin',
        name: 'Иван Петров',
        age: 27,
        role: 'Administrator',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'музыкант',
    },
    {
        type: 'user',
        name: 'Екатерина Попова',
        age: 24,
        group: 'дизайнер сайтов'
    },
    {
        type: 'admin',
        name: 'Аркадий Паравозов',
        age: 55,
        role: 'Системный администратор'
    },
    {
        type: 'user',
        name: 'Даня Поперечный',
        age: 28,
        group: 'Комик'
    },
    {
        type: 'admin',
        name: 'Олег',
        age: 44,
        role: 'Модератор'
    }
];
const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';
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
const filterPersons = (persons, criteria) => persons.filter(person => Object.entries(criteria).every(([key, value]) => person[key] === value));
console.log('Users of age 27:');
filterPersons(persons, {
    age: 27
}).forEach(logPerson);
