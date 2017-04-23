(function () {
    'use strict';

    angular
        .module('mms')
        .config(config);

    /** @ngInject */
    function config($mdDateLocaleProvider, $mdAriaProvider) {
        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('YYYY-MM-DD');
        };

        $mdAriaProvider.disableWarnings();
    }

})();
