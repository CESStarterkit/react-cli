var fs = require("fs");
var path = require("path");


module.exports = {

    // Used to extract base file name.
    getCurrentDirectory: function() {
        return path.basename(process.cwd);
    },

    // Used to check whether the direactory exists
    isDirectoryExists: function(filePath) {
        try {
            return fs.statSync(filePath).isDirectory;
        } catch (error) {
            return false;
        }
    }
}