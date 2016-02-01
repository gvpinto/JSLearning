'use strict';

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

//process.env.NODE_ENV = 'development';

jasmine.loadConfigFile('./jasmine/jasmine.json');

//----------------------------------------------------------------------------------------------------------------------
var SpecReporter = require('jasmine-spec-reporter');

var reporter = new SpecReporter();
jasmine.addReporter(reporter);

jasmine.execute();

