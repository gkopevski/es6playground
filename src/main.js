import Person from './person';

'use strict';

/**
 * ============================================================================== LET and const
 */
var letExampleFunctionBefore = function () {
    var endava = 1;
    let endavaSK = 1;
    var innerFunction1 = function () {
        endava++;
        endavaSK++;
    };

    innerFunction1();

    console.log('Endava value: ' + endava);
    console.log('EndavaSK value: ' + endavaSK);
};

var letExampleFunctionAfter = function () {
    {
        var endava = 1;
    }
    {
        let endavaSK = 1;
        endavaSK++;
        console.log('EndavaSK value: ' + endavaSK);
    }
    var innerFunction1 = function () {
        endava++;
        endavaSK++;
    };

    innerFunction1();

    console.log('Endava value: ' + endava);
    console.log('EndavaSK value: ' + endavaSK);
};


/**
 * ============================================================================== Arrows
 * http://es6-features.org/#StatementBodies
 */
var arrowlessFunction = function (list) {
    list.forEach(function (element, index, array) {
        console.log('Element ' + element + ' with index ' + index);
    });

};

var arrowFunction = (list) => {
    list.forEach((element, index)=> {
        console.log('Element ' + element + ' with index ' + index);
    });
};

/**
 * ============================================================================== Classes and inheritance in ES6
 * http://es6-features.org/#ClassDefinition
 */

/**
 * important to note is that the name of the
 */
class Company {
    constructor(companyName) {
        this.name = companyName;
    }

    get companyName() {
        return this.name;
    }
}


class DeliveryUnit extends Company {
    constructor(name, location) {
        super(name);
        this.location = location;
    }

    get getDeliveryUnitLocation() {
        return this.location;
    }
}


var classExampleFunction = function (companyName) {
    var company = new Company(companyName);
    console.log('Company name: ' + company.companyName);
};

var classInheritanceFunction = function (name, location) {
    var deliveryUnit = new DeliveryUnit(name, location);
    console.log('Company name: ' + deliveryUnit.companyName + ' with location ' + deliveryUnit.getDeliveryUnitLocation);
};


/**
 * ============================================================================== Object literals   
 */


/**
 * ============================================================================== Template strings and destructing
 */

var templateStringFunction = function(){
    var param1 = 'Marin', param2 = 'Stefi';
    var exampleTemplateString = `This is an example string with passed parameters ${param1}, and ${param2}`;
    console.log(exampleTemplateString);
};


/**
 * ============================================================================== Modules in ES6 (aka incorporated require
 */

var moduleImportUsageExample = function () {
    var newPerson = new Person('Goran', 'Kopevski');
    console.log('There is existence of a person with name: ' + newPerson.fullName);
}


var run = function () {
    //================================ Let
    // letExampleFunctionBefore();
    // letExampleFunctionAfter();


    //================================ Arrow
    arrowlessFunction(['Goran','Aleksandar', 'Filip', 'Eka']);
    arrowFunction(['Goran','Aleksandar', 'Filip', 'Eka']);


    //================================ Class
    classExampleFunction('Endava');
    classInheritanceFunction('Endava','Skopje');


    //================================ Object literals


    //================================ Template strings and destructing
    templateStringFunction();

    //================================ Module import and export
    moduleImportUsageExample();

};

run();

