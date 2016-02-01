'use strict';

var logger = require('./logger');

var obj = {

    initCache: function(instance) {
        this[instance] = this[instance] || {};
    },

    clearCache: function(instance) {
        this[instance] = {};
    },

    clearAllCache: function() {

        for(var property in this) {
            if (!(typeof this[property] === 'function')) {
                logger.log('Clearing cache for property: ' + property);
                this[property] = {};
            }
        }
    },

    addToCache: function(instance, key, value) {
        this.initCache(instance);
        this[instance][key] = value;
    },

    getFromCache: function(instance, key) {
        if (this[instance]) {
            return this[instance][key];
        } else {
            return null;
        }
    }

}


obj.initCache("100");
//obj.addToCache("100", "increment", {account: 2000});


if (var cache = obj.getFromCache("100", "increment")) {
    console.log('In cache');
} else {
    console.log('Not in cache');
}

console.log(obj.getFromCache("100", "increment"));

for(var property in obj) {
    if (!(typeof obj[property] === 'function')) {
        console.log(property + ": " + obj[property]);
    }
}


