const
    express = require('express'),
    app = express(),
    path = require("path"),
    PORT = process.env.PORT || 3000
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/views/index.html'))
})

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})