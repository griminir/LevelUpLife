whatPage();

function whatPage() {
  if (getSavedModel) {
    model = getSavedModel;
  }
  if (model.page === 'main') {
    showMainPage();
  } else {
    signUpScreen();
  }
}

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
    <div>level:${model.personYou.level}</div>
  </div>

  <div id="quest1">${model.quest.quest1} </div>
  <div id="quest2">${model.quest.quest2} </div>
  <button onclick="logOut()">Log out</Button>
  `;
  div.innerHTML = html;

  dayFinished();
}

function signUpScreen() {
  div.innerHTML = /*html*/ `
    <div class="container">
      <div class="form-box">
        <h1>Sign up</h1>
        <form>
            <div class="input-field">
              <i class="fa-solid fa-envelope"></i>
              <input type="email" id="email" placeholder="Email Id">
            </div>

            <div class="input-field">
              <i class="fa-solid fa-lock"></i>
              <input type="password" id="password" placeholder="Password">
            </div>
          <div class="button-field">
            <button onclick="signUp()">Sign up</button>
            <button onclick="signInScreen()">Sign in</button>
          </div>
        </form>
      </div> 
    </div>
  `;
}

function signInScreen() {
  div.innerHTML = /*html*/ `
    <div class="container">
      <div class="form-box">
        <h1>Log in</h1>
        <form>
            <div class="input-field">
              <i class="fa-solid fa-envelope"></i>
              <input type="email" id="email" placeholder="Your Email Id">
            </div>

            <div class="input-field">
              <i class="fa-solid fa-lock"></i>
              <input type="password" id="password" placeholder="Password">
            </div>
          <div class="button-field">
          <button onclick="signUpScreen()">Sign up</button>
            <button onclick="logIn()">Log in</button>
          </div>
        </form>
      </div> 
    </div>
  `;
}
