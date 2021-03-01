require('dotenv/config')
const express = require('express')
const multer = require('multer')
const port = 4000
const app = express()
const AWS = require('aws-sdk')

const storage = multer.memoryStorage({
       destination: function (req, files, callback) {
              callback(null, "")
       }
})

const group = multer({ storage }).single('image')

app.post('/group', group, (req, res) => {
       console.log(req.file)
       res.send({
              message: "Hello world "
       })
})

app.listen(port, () => {
       console.log(`server is running on port${port}`)
})