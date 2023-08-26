// to enable access to environment variables within tests
// require("dotenv").config({ path: "./.env.local", debug: true });

module.exports = {
  setupFiles: ["dotenv/config"],
};
