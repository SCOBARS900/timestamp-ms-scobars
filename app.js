var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/:dateS', function(req, res) {
    
    var dateL = req.params.dateS;
    var isNumber = /^\d+$/;
    
    var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    if(isNumber.test(dateL)) {
        
        var dateN = new Date(dateL * 1000);
        var dateNDay = dateN.getDate();
        var dateNMonth = dateN.getMonth();
        var dateNYear = dateN.getFullYear();
        var naturalDateN = monthsArray[dateNMonth] + " " + dateNDay + "," + dateNYear;
        
        res.json({ "unix": dateL, "natural": naturalDateN})
    } else if ((new Date(dateL)).getTime() > 0) {
        var dateU = new Date(dateL);
        var dateUDay = dateU.getDate();
        var dateUMonth = dateU.getMonth();
        var dateUYear = dateU.getFullYear();
        var naturalDateU = monthsArray[dateUMonth] + " " + dateUDay + "," + dateUYear;
        
        var unixDate = dateU.getTime() / 1000;
        
        res.json({ "unix": unixDate, "natural": naturalDateU})
    } else {
        res.json({ "unix": null, "natural": null})
    }

    
    
    
});




app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});