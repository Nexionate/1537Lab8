const express = require("express");
const app = express();
const PORT = 3000;

const cors = require("cors")
const axios = require("axios")

app.use(cors())

app.get("/weather", async(req, res) => {
    console.log(req.query.name);

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=63f3c05bfc8de92422db12d6f77d759e&units=metric`)
    console.log(response.data);

    res.json(response.data)
})
//provide in url "weather?city=Vancouver"
app.get("/home", (req, res) => {
    res.send("hey!")
    
})

app.listen(PORT, () => {
    console.log(`we are using ${PORT} !`);
})