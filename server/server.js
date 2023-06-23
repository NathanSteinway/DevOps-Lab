const express = require('express')
const app = express()

const Rollbar = require('rollbar')

let rollbar = new Rollbar({
  accessToken: '691e57b1adf948d6b7823a5b247d4bf9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Greetings, Gamer 🤓')

app.use(express.json())

app.get('/', (req, res) => {
    rollbar.log('I am here')
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`I hate ${port} mixups`))