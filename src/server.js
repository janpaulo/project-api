const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000


