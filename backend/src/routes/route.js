const { login } = require("../controllers/user");

module.exports = function (app) {
  app.get("/test", (req, res) => {
    res.send("OK");
  });

  app.post("login", login);
};
