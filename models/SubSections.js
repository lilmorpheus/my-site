/* Project Schema */
const mongoose = require('mongoose');
const file_schema = require('./file').schema;

const SubSecSchema = mongoose.Schema( {
    //Key and Sub Parts
    part_name: {
        type: String,
        required: true
    },
    files: {
        /*    TODO: child documents    */
        type: [file_schema] /* ID Array format */,
        required: true
    }
});

const SubSec = module.exports = mongoose.model('Sub Section', SubSecSchema);