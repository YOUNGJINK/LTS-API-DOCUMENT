(function () {
    'use strict';

    angular
        .module('app.api')
        .controller('ApiDocsController', ApiDocsController);

    /** @ngInject */
    function ApiDocsController($state, $stateParams, $mdDialog, $mdToast, api, Auth, $timeout, $mdSidenav) {
        var vm = this;

        if ($stateParams.id) {
            vm.pageTitle = '/' + $stateParams.id;
            vm.isHome = false;
        } else {
            vm.pageTitle = 'HOME';
            vm.isHome = true;
        }


        vm.toogleSidenav = toggleSidenav;
        vm.signout = signout;

        //////////
        function toggleSidenav(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        }

        function signout() {
            Auth.$signOut().then(function () {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('정상적으로 로그아웃 되었습니다.')
                        .position('top right')
                        .hideDelay(3000)
                );
                $state.go("app.pages_auth_login");
            }, function (error) {
                console.log('sign out fail', error);
            });
        }


    }
})();