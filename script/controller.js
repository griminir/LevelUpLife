function submitInfo() {
  getName();
  getWeight();
  getBday();
  getGender();
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
  model.page = 'main';
  localStorage.setItem('page', model.page);
}
