(function () {
    'use strict';

    angular
        .module('mms')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource) {
        var api = {};

        // Base Url
        api.baseUrl = 'http://mmsapi.ilts.co.kr/v4/';

        api.auth = $resource('http://mmsapi.ilts.co.kr/v2/auth/:id', {
            id: '@id'
        });

        api.users = $resource('http://mmsapi.ilts.co.kr/v2/users/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

        api.board = {
            list: $resource(api.baseUrl + 'board', {}, {
                update: {
                    method: 'PUT'
                }
            }),
            view: $resource(api.baseUrl + 'board/:id', {id: '@id'}),
            comment: $resource(api.baseUrl + 'board-comment/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            }),
            reply: $resource(api.baseUrl + 'board-reply/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            }),
            history: $resource(api.baseUrl + 'board-history/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            }),
            activity: $resource(api.baseUrl + 'board-activity/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            }),
            state: $resource(api.baseUrl + 'board-state/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            })
        };

        api.task = {
            list: $resource(api.baseUrl + 'tasks', {}),
            favorite: $resource(api.baseUrl + 'task-favorite/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            }),
            start: $resource(api.baseUrl + 'task-start/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            })
        };


        api.companys = $resource(api.baseUrl + 'companys', {});

        return api;
    }

})
();