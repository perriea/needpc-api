var error     = require('../../controllers/error');
var validator = require('validator');
var path      = require('path');
var Models    = require(path.join(__dirname, '../../models/index'));

module.exports = {

    // Get all question (general || domain)
    Get: function (req, res) {

        conditions = {};

        // Include relations
        includes = [
            { 
                model: Models["computers_activities"],
                as: "activity",
                attributes: { 
                    exclude: [
                        'id', 
                    ] 
                } 
            },
            { 
                model: Models["computers_quests_resps"],
                as: "responses",
                attributes: { 
                    exclude: [
                        'id', 
                        'quest_id', 
                        'created_at', 
                        'updated_at'
                    ] 
                } 
            }
        ]

        // query activity
        if (req.query.activity != null && req.query.activity != "")
            conditions["activity_id"] = { $eq: req.query.activity };

        // query activity
        if (req.query.rank != null && req.query.rank != "")
            conditions["rank"] = { $eq: req.query.rank };

        // search in database
        Models["computers_quests"].findAll({
            include: includes,
            where: {
                $and: conditions,
            },
            attributes: { 
                exclude: [
                    'activity_id',
                    'created_at', 
                    'updated_at'
                ] 
            }
        }).then(function (question) {
            error.http_success(req, res, { code: 200, data: question });
        });
    }
};