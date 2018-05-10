const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authors_angular");
require("../models/author");