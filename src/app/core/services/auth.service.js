(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('Auth', Auth);

    /** @ngInject **/
    function Auth($firebaseAuth) {
        return $firebaseAuth();
    }
})();