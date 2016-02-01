var fs = require('fs');

function readJSONThrows(filename, callback) {
    fs.readFile(filename, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        } else {
            callback(null, JSON.parse(data));
        }
    });
}

readJSONThrows('nonJsonData.txt', function (err) {
    console.log(err);
});

process.on('uncaughtException', function(err) {
    console.error('This will catch at last the JSON parsing exception: ' + err.message);
    process.exit(1);
})