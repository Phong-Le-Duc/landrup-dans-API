var app = express();

var router = require("./router");

var { testConnection } = require("./config/database");

var cors = require("cors");

testConnection();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

module.exports = app;