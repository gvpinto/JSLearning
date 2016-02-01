function Promise(fn) {

    var state = 'pending';
    var deferred;
    var value;

    function resolve(newValue) {
        value = newValue;
        state = 'resolved';

        if (deferred) {
            handle(deferred);
        }
    }

    function handle(onResolved) {

        if (state === 'pending') {
            deferred = onResolved;
            return;
        }

        onResolved(value);
    }

    this.then = function(onResolved) {
        handle(onResolved);
    }


    fn(resolve);

}

function doSomething() {
    return new Promise(function(resolve) {
        var value = 42;
        setTimeout(function() {
            resolve(value);
        }, 2000);

    })
}

var promise = doSomething();

promise.then(function(value) {
    console.log('Got a value:', value);
});

promise.then(function(value) {
    console.log('Got the same value again:', value);
});