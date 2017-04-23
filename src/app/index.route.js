(function ()
{
    'use strict';

    angular
        .module('mms')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
    }

})();
