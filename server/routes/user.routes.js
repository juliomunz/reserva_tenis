const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);
}