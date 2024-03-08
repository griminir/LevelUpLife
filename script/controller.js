//100% experimentelt fra dette punktet til neste kommentar
const express = require('express');
const {
  createItem,
  readItems,
  updateItem,
  deleteItem,
} = require('./dbFunctions.js');
let cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.get('/users', (req, res) => {
  readItems((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.post('/users', (req, res) => {
  const { email, password } = req.body;
  createItem(email, password, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send(`Item is added ID : ${data.id}`);
    }
  });
});

app.put('/users/:id', (req, res) => {
  const { email, password } = req.body;
  console.log('ID: ' + req.params.id);
  updateItem(parseInt(req.params.id), email, password, (err) => {
    if (err) {
      console.log('ERROR: ' + err);
      res.status(500).send(err.message);
      console.log(req.params.id);
    } else {
      res.status(200).send('Updated item');
    }
  });
});

app.delete('/users', (req, res) => {
  deleteItem(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send('Deleted');
    }
  });
});

app.listen(3000, () => {
  console.log('server is running');
});

//experimentasjon ferdig

function submitInfo() {
  getName();
  getWeight();
  getBday();
  getGender();
  amountOfQuests();
  changeToMain();
  saveInfoToMemory();
  showMainPage();
}

function getName() {
  model.personYou.name = document.getElementById('name').value;
  localStorage.setItem('name', model.personYou.name);
}

function getWeight() {
  model.personYou.weight = document.getElementById('weight').value;
  localStorage.setItem('weight', model.personYou.weight);
}

function getBday() {
  model.personYou.birthday = document.getElementById('birthday').value;
  localStorage.setItem('birthday', model.personYou.birthday);
}

function getGender() {
  model.personYou.gender = document.getElementById('gender').value;
  localStorage.setItem('gender', model.personYou.gender);
}

function changeSitups(elem) {
  amountOfSitups = elem.value;
}
function changePushups(elem) {
  amountOfPushups = elem.value;
}

function changeSteps(elem) {
  amountOfSteps = elem.value;
}

function saveInfoToMemory() {
  let modelSaved = JSON.stringify(model);
  localStorage.setItem('model', modelSaved);
}

function quest1Done() {
  expGain();
  model.quest.quest1 = '';
  saveInfoToMemory();
  whatPage();
}

function quest2Done() {
  expGain();
  model.quest.quest2 = '';
  saveInfoToMemory();
  whatPage();
}

function expGain() {
  model.personYou.level++;
}

function dayFinished() {
  if (model.quest.quest1 == '' && model.quest.quest2 == '') {
    div.innerHTML += /*html*/ `
      <div>Great Work today!</div>
      <button onclick="newDay()">Start next day?</button>
    `;
  }
}

function newDay() {
  amountOfQuests();
  saveInfoToMemory();
  showMainPage();
}

function signUp() {
  getEmail();
  getPassword();
  updateToServer();
  changeToFirstpage();
  if (model.user.email != 'admin' && model.user.password != 'blood3') {
    saveInfoToMemory();
    showFirstPage();
  }
}

function getEmail() {
  if (document.getElementById('email').value != '') {
    model.user.email = document.getElementById('email').value;
    localStorage.setItem('email', model.user.email);
  }
}

function getPassword() {
  if (document.getElementById('password').value != '') {
    model.user.password = document.getElementById('password').value;
    localStorage.setItem('password', model.user.password);
  }
}

// function logIn(check) {
//   if (
//     document.getElementById('email').value == check.email &&
//     document.getElementById('password').value == check.password
//   ) {
//     changeToMain();
//     saveInfoToMemory();
//     showMainPage();
//   }
// }

function logOut() {
  model.page = '';
  localStorage.setItem('page', model.page);
  saveInfoToMemory();
  signInScreen();
}

//denne funksjonen setter pages til main slik at husker at du er innlogget
function changeToMain() {
  model.page = 'main';
  localStorage.setItem('page', model.page);
}

function changeToFirstpage() {
  model.page = 'first';
  localStorage.setItem('page', model.page);
}

//100% eksperimentelt men funker for POST
async function saveToServer() {
  let res = await fetch(`http://localhost:3000/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email: 'admin@gmail.com',
      password: 'blood3',
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
  console.log(res);
}
saveToServer();

async function updateToServer() {
  let res = await fetch(`http://localhost:3000/users/1`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(model.user),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
  console.log(res);
}

async function getLogIn() {
  let checkLogin;

  const res = await fetch('http://localhost:3000/users');

  checkLogin = await res.json();

  console.log(checkLogin);
  console.log(checkLogin[0].email);
  console.log(checkLogin[0].password);
  if (
    document.getElementById('email').value == checkLogin[0].email &&
    document.getElementById('password').value == checkLogin[0].password
  ) {
    changeToMain();
    saveInfoToMemory();
    showMainPage();
  }
}
