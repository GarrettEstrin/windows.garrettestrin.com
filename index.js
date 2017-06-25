const
    express = require('express'),
    app = express(),
    path = require("path"),
    PORT = 3000
app.use(express.static('public'))

app.get('/', function(req, res){
    res.send("This is the home page")
})

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})