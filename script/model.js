let model = {
  page: '',
  user: {
    email: 'admin@gmail.com',
    password: 'blood3',
  },
  personYou: {
    name: 'Viktor',
    age: 29,
    birthday: '02/11',
    weight: 100,
    gender: 'male',
    level: 1,
  },
  quest: {
    quest1: '',
    quest2: '',
  },
};

let getSavedModel = JSON.parse(localStorage.getItem('model'));

let level = '1';

let div = document.getElementById('app');

let profilepicture = 'img/profilepic.jpg';

let questList = [1, 2];

let amountOfSitups = 0;
let amountOfPushups = 0;
let amountOfSteps = 0;

// let quest1;
// let quest2;
