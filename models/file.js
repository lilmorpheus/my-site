/* Look into storing images*/
const mongoose = require('mongoose');

const FileSchema = mongoose.Schema( {
    //Key and Sub Parts
    file_name: {
        type: String,
        required: true
    }
});

const File = module.exports = mongoose.model('File', FileSchema);