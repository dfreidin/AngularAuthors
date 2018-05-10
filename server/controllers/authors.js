const mongoose = require("mongoose");
const Author = mongoose.model("Author");
function buildQueryHandler(res) {
    return function(err, data) {
        if(err) {
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: data
            });
        }
    }
}
module.exports = {
    index: function(req, res) {
        Author.find({}, null, {sort: {name: 1}}, buildQueryHandler(res));
    },
    create: function(req, res) {
        Author.create(req.body, buildQueryHandler(res));
    },
    retrieve: function(req, res) {
        Author.findById(req.params.id, buildQueryHandler(res));
    },
    update: function(req, res) {
        Author.updateOne({_id: req.params.id}, req.body, buildQueryHandler(res));
    },
    destroy: function(req, res) {
        Author.deleteOne({_id: req.params.id}, buildQueryHandler(res));
    }
}