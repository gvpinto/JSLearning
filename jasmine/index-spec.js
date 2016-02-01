'use strict';

describe('Verify before all', function() {

    var person, prevPerson;

    beforeEach(function () {

        var Person = require('./person').Person;
        person = new Person('Glenn');

    });

    it('First Test Case', function() {
        expect(person.name).toBe('Glenn');
    })

    it('Second Test Case', function() {
        expect(prevPerson.name).toBe('Glenn');
        expect(person.name).toBe('Glenn');
        expect(prevPerson === person).toBe(false);
    })

    afterEach(function() {
        prevPerson = person;
        //var name = require.resolve('moduleName');
        //delete require.cache[name];
    })

})

