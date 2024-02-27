const app = require(".");
const PORT = 5000;

app.listen(PORT, console.log("Server started at port no:", PORT));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to Ecommerce api - Node", status: true });
});
