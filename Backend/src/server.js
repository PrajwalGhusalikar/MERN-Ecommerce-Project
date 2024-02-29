const app = require(".");
const {ConnectionToDb} = require("./Configure/db")
const PORT = 5000;



app.listen(PORT, async ()=>{
await ConnectionToDb()
});

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to Ecommerce api - Node", status: true });
});
