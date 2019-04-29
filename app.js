var express               = require("express"); //Hier wird express eingebunden
var app                   = express(); //Hier wird die express Variable initialisiert. Mit dieser variable wirst du fast alles vom Server schreiben

app.set('port', (process.env.PORT || 5000)); //Hier wird der Port gesetzt. Dieser kann jeder sein

app.get("/", function(req, res){ //Hier wird eine Rute gesetzt. / bedeutet die root Rute. Die Callback Funktion gibt an was bei aufrufen der Rute geschehen soll. req speichert den request und res speichert den respond
    res.send("root route"); //res.send gibt einen http Text zurück. In diesem Fall "root route"
});

app.listen(app.get('port'), function() { //Hier wird der Server gestartet
    console.log("Node app is running at localhost:" + app.get('port')); //Kurze Konsolenausgabe um zu sehen ob der Server Läuft
});