var express = require('express')
var app = express()
 
// app.get('/', function (req, res) {
//   res.send('<b>Hello World</b></br><p>Mundoo</p>')
// })

app.use(express.static(__dirname+'/public'))

app.listen(3000)