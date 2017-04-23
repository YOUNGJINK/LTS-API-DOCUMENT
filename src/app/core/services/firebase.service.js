(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('FirebaseApi', FirebaseApi);

    /** @ngInject **/
    function FirebaseApi($firebaseArray, $firebaseObject) {
        var ref;

        return {
            Farray: Farray,
            Fobject: Fobject
        };

        function Farray(path) {
            ref = firebase.database().ref(path);
            return $firebaseArray(ref);
        }

        function Fobject(path) {
            ref = firebase.database().ref(path);
            return $firebaseObject(ref);
        }
    }
})();