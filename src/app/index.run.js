(function () {
    'use strict';

    angular
        .module('mms')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state, $mdDialog) {

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        //Auth
        $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                $state.go("app.pages_auth_login");
            }
        });

        $rootScope.$on('$locationChangeStart', function ($event) {
            if (angular.element(document).find('md-dialog').length) {
                $event.preventDefault();
                $mdDialog.cancel();
            }
        });
    }
})();
