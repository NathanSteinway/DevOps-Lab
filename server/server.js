const express = require('express')
const app = express()
const path = require('path')

const Rollbar = require('rollbar')

let rollbar = new Rollbar({
  accessToken: '691e57b1adf948d6b7823a5b247d4bf9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Greetings, Gamer 🤓')

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.status(200).sendFile((path.join(__dirname, '../public/index.html')))
})

let testData = ["haha", "fight", "spite", "heehee"]

app.get('/test', (req, res) => {

    try {0 % 0}
    catch (err) {
        Rollbar.critical('Could not Run')
    }
    res.status(200).send(testData)

    
})


const port = process.env.PORT || 5050

app.listen(port, () => console.log(`I hate ${port} mixups`))