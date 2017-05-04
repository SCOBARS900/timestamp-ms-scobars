var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/:dateS', function(req, res) {
    
    var dateL = req.params.dateS;
    var isNumber = /^\d+$/;
    
    if(isNumber.test(dateL)) {
        var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dateN = new Date(dateL * 1000);
        var dateNDay = dateN.getDate();
        var dateNMonth = dateN.getMonth();
        var dateNYear = dateN.getFullYear();
        var naturalDate = monthsArray[dateNMonth] + " " + dateNDay + "," + dateNYear;
        
        res.json({ "unix": dateL, "natural": naturalDate})
    } 

    
    
    
});




app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});