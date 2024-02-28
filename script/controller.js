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

function logIn() {
  if (
    document.getElementById('email').value == model.user.email &&
    document.getElementById('password').value == model.user.password
  ) {
    changeToMain();
    saveInfoToMemory();
    showMainPage();
  }
}

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

//100% experimentelt
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database/database.db');

//creates a table to store users
db.serialize(() => {
  db.run(
    'CREATE TABLE IF NOT EXISTS users (id PRIMARY KEY, email TEXT, password TEXT)'
  );
});

function addUser(number, email, password) {
  const stmt = db.prepare('INSERT INTO users VALUES (?, ?, ?)');
  stmt.run(number, email, password);
  stmt.finalize();
}

function updateUser(newEmail, newPassword) {
  const stmt = db.prepare(
    'UPDATE users SET email = ?, password = ? WHERE id = 1'
  );
  stmt.run(newEmail, newPassword);
  stmt.finalize();
}
addUser('1', 'admin@gmail.com', 'blood3');
