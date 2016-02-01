'use strict';

var name = 'Glenn';

function _addLastName() {
    return name + ' ' + 'Pinto'
}
module.exports.printname = function() {
    return _addLastName();
}