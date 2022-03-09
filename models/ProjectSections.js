/* Project Schema */
const mongoose = require('mongoose');
const SubSection = require('./SubSections').schema;

const ProjectSecSchema = mongoose.Schema( {
    //Key and Sub Parts
    part_name: {
        type: String,
        required: true
    },
    sub_sections: {
        /*    TODO: child documents    */
        type: [SubSection] /* ID Array format */,
        required: true
    }
});

const ProjectSec = module.exports = mongoose.model('Project Part', ProjectSecSchema);