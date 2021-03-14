const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const fetchAPI = require('./API.js')
const dotenv = require('dotenv');
const regeneratorRuntime = require("regenerator-runtime");

const PORT = 8081


var corsOptions = {
    origin: `http://localhost:${PORT}`,
    optionsSuccessStatus: 200,
    methods: "GET, POST"
}


const app = express()

app.use(express.static('dist'))

app.use(cors(corsOptions))

app.use(bodyParser.json());

dotenv.config();


app.get('/', cors(), function (req, res) {
    res.sendFile('dist/index.html')
})


app.post('/submit', cors(), async (req, res) => {

    const InputData = req.body;

    try {
        const nlpData = await fetchAPI(InputData);
        formatedData = JSON.stringify(nlpData);
        console.log(formatedData);
        res.status(200).send(formatedData);
    } catch (error) {
        res.status(400).send(error);
    }

})

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, (error) => {
        if (error) throw new Error(error)
        console.log(`Server listening on port ${PORT}!`)
    })
}




module.exports = { app };