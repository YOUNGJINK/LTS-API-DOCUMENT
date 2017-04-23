(function() {
    'use strict';

    angular
        .module('app.api', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/:id',
                templateUrl: 'app/main/api-docs/api-docs.html',
                controller: 'ApiDocsController as vm'
            });
    }
})();