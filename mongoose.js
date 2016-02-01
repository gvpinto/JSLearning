var mongoose = require('mongoose');

// with mongodb:// URI
db = mongoose.connect('mongodb://localhost:port/FinSpiDER');

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var NumberRanges = new Schema({

    _id: String,

    instrumentId: {
        rangeType: String,
        minValue: Number,
        maxValue: Number,
        currValue: Number,
        increment: Number,
        validRegex: String
    }

});

mongoose.model('NumberRange', NumberRanges);

var NumberRange = mongoose.model('NumberRange');

NumberRange.findOne({_id: "100"}, function (err, doc) {
    if (err) {
        console.log(err);
    } else {
        console.log(doc.toObject());
    }
});



//// and options
//var opts = { db: { native_parser: true }}
//db = mongoose.createConnection('mongodb://user:pass@localhost:27017/database', opts);
//
//// replica sets
//db = mongoose.createConnection('mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/database');
//
//// and options
//var opts = { replset: { strategy: 'ping', rs_name: 'testSet' }}
//db = mongoose.createConnection('mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/database', opts);
//
//// with [host, database_name[, port] signature
//db = mongoose.createConnection('localhost', 'database', port)
//
//// and options
//var opts = { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' }
//db = mongoose.createConnection('localhost', 'database', port, opts)
//
//// initialize now, connect later
//db = mongoose.createConnection();
//db.open('localhost', 'database', port, [opts]);
