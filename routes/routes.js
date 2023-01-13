const router = require("express").Router();
const authController = require("../controllers/auth.controller");


// auth
router.get("/", (req, res) => {
    res.send(`
    <form class="ui form" name="inscription" method="post" action="/">
    <div class="field">
      <label>First Name</label>
      <input type="text" name="firstName" placeholder="First Name">
    </div>
    <div class="field">
      <label>Last Name</label>
      <input type="text" name="lastName" placeholder="Last Name">
    </div>
    <div class="field">
      <label>email</label>
      <input type="text" name="email" placeholder="email" >
    </div>
    <div class="field">
      <label>password</label>
      <input type="password" name="password" placeholder="password" >
    </div>
    <button class="ui button" type="submit">Submit</button>

  </form>
    `);
  });
  router.get("/login", (req, res) => {
    res.send(`
    <form class="ui form" name="inscription" method="post" action="/login">
    <div class="field">
      <label>email</label>
      <input type="text" name="email" placeholder="email" >
    </div>
    <div class="field">
      <label>password</label>
      <input type="password" name="password" placeholder="password" >
    </div>
    <button class="ui button" type="submit">Submit</button>

  </form>
    `);
  });

  router.get("/dashboard", (req, res) => {
    res.send(`
    <form class="ui form" name="inscription" method="get" action="/logout">

      <h2>SALUT</h2>
    
    <button class="ui button" type="submit">logout</button>

  </form>
    `);
  });
router.get("/logout", authController.logout);

router.post("/", authController.signUp);
router.post("/login", authController.signIn);



module.exports = router;