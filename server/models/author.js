const mongoose = require("mongoose");
var AuthorSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3}
}, {timestamps: true});
mongoose.model("Author", AuthorSchema);