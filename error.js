'use strict';




function ErrorHandler() {

    var _this = this;

    function FinAppError(errMessageValue, statusValue) {

        this.status = statusValue || 500;
        this.data = {};

        if (errMessageValue) {
            this.data.status = this.status;
            this.data.error = errMessageValue;
        }

    }

    FinAppError.prototype.setErrorMessage = function(errMessageValue, statusValue) {
        this.status = statusValue || 500;
        if (errMessageValue) {
            this.data.status = this.status;
            this.data.error = errMessageValue;
        }
    }

    this.FinAppErrorContructor = FinAppError.constructor;

    function _handleError(message, status) {
        console.log('Error Message: ' + message + ', Status: ' + status);

        var apperror = new FinAppError(message, status);
        _this.FinAppErrorConstructor = _this.FinAppErrorConstructor || apperror.constructor;
        return apperror;
    }

    this.sysErr = function(message) {
        return _handleError(message, 500);

    }

    this.appErr = _handleError;

    this.notFoundErr = function(message) {
        return _handleError(message, 404);
    }

}


var error = new ErrorHandler();
//console.log(error instanceof ErrorHandler);
var finapperror = error.sysErr('this is a Test');
//console.log(error.sysErr('this is a Test'));

console.log(JSON.stringify(finapperror));
console.log(finapperror instanceof error.FinAppErrorConstructor);
console.log(error.FinAppErrorConstructor);

