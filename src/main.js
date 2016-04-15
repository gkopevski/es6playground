(function(){
    'use strict';
    /**
     * ============================================================================== LET example
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
     * ============================================================================== Classes in JS
     * http://es6-features.org/#ClassDefinition
     */

    class Company {
        constructor(name) {
            this.name = name;
        }

        get name() {
            return this.name;
        }
    }

    var classExampleFunction = function () {

        var company = new Company('Endava');

        console.log('Company name: ' + company.name());

    };


    /**
     * ==============================================================================
     */

    /**
     * ==============================================================================
     */

    /**
     * ==============================================================================
     */


    var run = function () {
        //================================
        // letExampleFunctionBefore();
        // letExampleFunctionAfter();


        //================================
        // arrowlessFunction(['Goran','Aleksandar', 'Filip', 'Eka']);
        // arrowFunction(['Goran','Aleksandar', 'Filip', 'Eka']);


        //================================
        classExampleFunction();

    };

    run();

})();
