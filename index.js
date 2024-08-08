require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const Office_Data = {"Qwerty":"789545","yutr": "123546", "bhunj":"456123"}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
  res.send("Hello World 2")
})

app.get('/qwerty', (req,res) => {
  res.send("Hello Qwerty")
} )

app.get('/asd', (req,res) => {
  res.json(Office_Data)
} ) 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})