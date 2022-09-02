const { db } = require("./utils/database.util");
const { app } = require("./app");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();
  } catch (error) {
    console.log(error);
  }
  const PORT = 4000;

  app.listen(PORT, () => {
    console.log("running express");
  });
};

startServer();