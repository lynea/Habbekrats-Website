var     express         = require("express"); 
        bodyParser      = require("body-parser"),
        cors            = require("cors"),
        morgan          = require("morgan"),
        app             = express();  

app.use(morgan("combined")); 
app.use(bodyParser.json()); 
app.use(cors()); 

app.get("/", function(req, res){
    res.send("hello world"); 
})

app.listen(process.env.PORT || 8081);