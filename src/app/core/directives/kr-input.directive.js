(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('krInput', krInput);

    /** @ngInject */
    function krInput() {
        return {
            priority: 2,
            restrict: 'A',
            compile: function (element) {
                element.on('compositionstart', function (e) {
                    e.stopImmediatePropagation();
                });
            },
        };
    }
})();