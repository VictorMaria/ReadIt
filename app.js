const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/dist/readit'));

app.get('/*', function(req, res) {
    
res.sendFile(path.join(__dirname+'/dist/readit/index.html'));
});


app.listen(process.env.PORT || 4200);