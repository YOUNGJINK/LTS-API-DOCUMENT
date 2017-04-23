(function () {
    'use strict';

    angular
        .module('app.pages.auth.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider.state('app.pages_auth_login', {
            url: '/login',
            templateUrl: 'app/main/pages/auth/login/login.html',
            controller: 'MainController as vm',
            bodyClass: 'login'
        });
    }

})();