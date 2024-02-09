if (model.page === 'main') {
  showMainPage();
} else {
  showFirstPage();
}
showFirstPage();
function showFirstPage() {
  let html = /*html*/ `
  <h1>Player creation</h1>
  <div>
    <div>Name:</div>
    <input id="name" type="text" />
  </div>
  <div>
    <div>weight in kg:</div>
    <input id="weight" type="number" min="0" max="999" />
  </div>
  <div>
    <div>date of birth:</div>
    <input id="birthday" type="date" />
  </div>
  <div>
    <div>
      <label for="gender">gender:</label>
    </div>

    <select name="gender" id="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="attackHellicopter">attack hellicopter</option>
      <option value="noGender">I'd like not to say</option>
    </select>
  </div>
  <div>
    <button onclick="submitInfo()">Submit</button>
  </div>
  `;
  div.innerHTML = html;
}

function showMainPage() {
  let html = /*html*/ `
  <div class="topBar">
    <div><img class="profilePic" src="${profilepicture}" alt="profilepicture"</div>
    <div>${model.personYou.name || 'viktor'}</div>
    <div>${level}</div>
  </div>

  <div id="quest1">${questCard()}</div>
  <div id="quest2">${questCard()}</div>
  `;
  div.innerHTML = html;
}

// function questCard(questNumber) {
//   let quest = /*html*/ `
//     <div>hei</div>
//   `;
//   return quest;
// }
function randomQuest() {
  questNumber = Math.floor(Math.random() * questList.length);
  return questNumber;
}

function questCard() {
  randomQuest();
  let quest = '';
  switch (questNumber) {
    case 0:
      quest = /*html*/ `
        <div><input onchange="changeSitups(this)" type="number" value="${amountOfSitups}">/10 situps</div>
        <div><input onchange="changePushups(this)" type="number" value="${amountOfPushups}">/10 pushups</div>
        <div><input onchange="changeSteps(this)" type="number" value="${amountOfSteps}">/10 steps</div>
      `;
      return quest;
      break;
    case 1:
      quest = /*html*/ `
        <div>hallo</div>
      `;
      return quest;
      break;
  }
}
