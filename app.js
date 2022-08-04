const express = require('express')
const multer = require('multer')
const app = express()
const port = 3000
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${file.originalname} - ${uniqueSuffix}`)
  }
})

const upload = multer({ storage: storage })

app.post('/file', upload.single('file'), (req, res) => {
  res.redirect('/carta')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/carta', (req, res) => {
  res.sendFile(path.join(__dirname,'indexCarta.html'))
})

app.get('/reservacion', (req, res) => {
  res.sendFile(path.join(__dirname,'calendario.html'))
})
 app.use(express.static(path.join(__dirname)))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})