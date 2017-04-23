(function ()
{
    'use strict';

    angular
        .module('app.core')
        .config(config);

    /** @ngInject */
    function config($ariaProvider, $logProvider, msScrollConfigProvider, $mdDateLocaleProvider)
    {
        // 캘린더 한글화
        $mdDateLocaleProvider.months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        $mdDateLocaleProvider.shortMonths = $mdDateLocaleProvider.months;
        $mdDateLocaleProvider.days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        $mdDateLocaleProvider.shortDays = ['월', '화', '수', '목', '금', '토', '일'];

        $mdDateLocaleProvider.formatDate = function(date) {
            return date ? moment(date).format('YYYY-MM-DD') : '';
        };

        $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
            return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월';
        };


        // Enable debug logging
        $logProvider.debugEnabled(true);

        /*eslint-disable */

        // ng-aria configuration
        $ariaProvider.config({
            tabindex: false
        });

        // msScroll configuration
        msScrollConfigProvider.config({
            wheelPropagation: true
        });

        /*eslint-enable */
    }
})();