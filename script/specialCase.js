function amountOfQuests() {
  for (let i = 0; i < questList.length; i++) {
    if (i == 0) {
      questCardTraining();
    } else if (i == 1) {
      questCardWellness();
    }
  }
}

function questCardWellness() {
  randomQuest();
  switch (questNumber) {
    case 0:
      model.quest.quest2 = /*html*/ `
        <div>våkne klokka 5</div>
        <button onclick="quest2Done()">compleate?</button>
      `;
      return model.quest.quest2;
      break;

    case 1:
      model.quest.quest2 = /*html*/ `
        <div>mediter 10 min</div>
        <button onclick="quest2Done()">compleate?</button>
      `;
      return model.quest.quest2;
      break;
  }
}

function questCardTraining() {
  randomQuest();
  switch (questNumber) {
    case 0:
      model.quest.quest1 = /*html*/ `
        <div><input onchange="changeSitups(this)" type="number" value="${amountOfSitups}">/10 situps</div>
        <div><input onchange="changePushups(this)" type="number" value="${amountOfPushups}">/10 pushups</div>
        <div><input onchange="changeSteps(this)" type="number" value="${amountOfSteps}">/10 steps</div>
        <button onclick='quest1Done()'>compleate?</button>
      `;
      return model.quest.quest1;
      break;
    case 1:
      model.quest.quest1 = /*html*/ `
        <div>løp et marathon</div>
        <button onclick='quest1Done()'>compleate?</button>
      `;
      return model.quest.quest1;
      break;
  }
}

function randomQuest() {
  questNumber = Math.floor(Math.random() * questList.length);
  return questNumber;
}
