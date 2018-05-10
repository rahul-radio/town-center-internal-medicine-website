// Require Node Modules
var bodyParser      = require("body-parser"),
    request         = require("request"),
    express         = require("express"),
    app             = express(),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    methodOverride  = require("method-override");

//Require routes for pages
var routes          =  require("./routes/index");

// Connect mongoose to Mongo
//var url = process.env.DATABASE || "mongodb://localhost/TCIM";  //once ready to deploy
//mongoose.connect('mongodb://localhost/TCIM');

// Tell Express to Use Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// Set view Engine to ejs
app.set("view engine", "ejs");
app.use(methodOverride("_method")); //enable method override for PUT and Delete methods
// seedDB();

app.use(flash()); //For flash notifications 

// User the routes we required above
app.use(routes);

var port = parseInt(process.env.PORT) || 27017;

// Tell express to listen to requests on a certain port
//Need to add back process.env.PORT once ready to test.
app.listen(27017, process.env.IP, function(){
    console.log("Server has started");
});

