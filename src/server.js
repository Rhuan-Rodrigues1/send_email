const { app } = require("./app");
const { config } = require("dotenv");

config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("App running on: http://localhost:" + PORT);
});
