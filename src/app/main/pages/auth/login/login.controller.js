(function() {
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state, $mdDialog, api, Auth, $timeout) {
        var vm = this;

        vm.CheckComplete = false;

        vm.login = login;

        $timeout(checkLogin, 2000);

        function checkLogin() {
            Auth.$onAuthStateChanged(function(firebaseUser) {
                vm.CheckComplete = false;
                if (firebaseUser) {
                    api.auth.save({}, {
                            email: firebaseUser.email,
                            uid: firebaseUser.uid
                        },
                        function(response) {
                            if (response.success) {
                                $state.go("app.home");
                            } else {
                                $mdDialog.show(
                                    $mdDialog.alert()
                                    .parent(angular.element(document.querySelector('#login')))
                                    .title('알림')
                                    .textContent('허용되지 않은 사용자입니다.')
                                    .ok('확인')
                                );

                                firebase.auth().signOut().then(function() {}, function(error) {
                                    console.log('sign out fail', error);
                                });
                            }
                        },
                        function(error) {
                            console.log(error);
                            vm.CheckComplete = true;
                        });
                } else {
                    vm.CheckComplete = true;
                }
            });
        }

        function login() {
            Auth.$signInWithRedirect("google")
                .then(function() {})
                .catch(function(error) {
                    console.error("Authentication failed:", error);
                });
        }
    }
})();