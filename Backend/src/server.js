const app = require(".");
const {ConnectionToDb} = require("./Configure/db")
const PORT = 5000;

app.listen(PORT, async ()=>{
await ConnectionToDb()
});

