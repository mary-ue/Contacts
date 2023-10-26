type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

type Person = Admin | User;

const persons: Person[] = [
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

const logPerson = (person: Person) => {
  let information: string;
  if ('role' in person) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);