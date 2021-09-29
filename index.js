const services = require('./parserService.js')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3001
const corsOptions = {
    origing:"*",
    optionsSuccessStatus: 200
} 
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.post('/parse', async (req, res) => {
  const data = await services.parseFile(req).catch((err) => {
    console.trace(err)
    res.status(500).send("Internal server error.")
  });
  if(data)
    res.status(200).json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

