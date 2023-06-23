const express = require('express')
const app = express()
const path = require('path')
const Rollbar = require('rollbar')
const port = process.env.PORT || 5050

let rollbar = new Rollbar({
  accessToken: '691e57b1adf948d6b7823a5b247d4bf9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Greetings, Gamer 🤓')

app.use(express.json())

app.get('/', (req, res) => {
    try {
        iDontExist();
    }
    catch (err) {
        console.error(err)
    }
})

app.listen(port, () => console.log(`I hate ${port} mixups`))