const express = require("express");
const cors = require("cors");

const { sequelize } = require("./models");
const injectModelCtx = require("./middlewares/injectModelCtx");
const router = require("./routers");

const port = process.env.PORT || 3030;

const app = express();

app.use(cors());
app.use(express.json());
app.use(injectModelCtx);

app.use("/api", router);

app.use((err, req, res, next) => {
  console.log(err);
  if (err) {
    res.status(err.status || 500).json({
      msg: err.msg || "Error",
    });
  }
});

sequelize.sync({ force: false }).then(async () => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});
