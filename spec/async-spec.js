describe("Asynchronous specs", function() {
    var value;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;
    beforeEach(function(done) {
        setTimeout(function() {
            value = 0;
            done();
        }, 10000);
    });

    it("should support async execution of test preparation and expectations", function(done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });

    //describe("long asynchronous specs", function() {
    //    beforeEach(function(done) {
    //        done();
    //    }, 1000);
    //
    //    it("takes a long time", function(done) {
    //        setTimeout(function() {
    //            done();
    //        }, 9000);
    //    }, 10000);
    //
    //    afterEach(function(done) {
    //        done();
    //    }, 1000);
    //});

    //describe("A spec using done.fail", function() {
    //    var foo = function(x, callBack1, callBack2) {
    //        if (x) {
    //            setTimeout(callBack1, 0);
    //        } else {
    //            setTimeout(callBack2, 0);
    //        }
    //    };
    //
    //    it("should not call the second callBack", function(done) {
    //        foo(true,
    //            done,
    //            function() {
    //                done.fail("Second callback has been called");
    //            }
    //        );
    //    });
    //});
});