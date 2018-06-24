(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('jeremy', [
        'ngRoute'
    ]).config(config)
    .run(['$window', function ($window) {
        $window.onload = function () {
            $('.parallax').parallax();
        };
    }])
    .controller('baseController',
        ['$scope', function ($scope) {
            $scope.$on('$viewContentLoaded', function () {
                $('.parallax').parallax();
            });
        }]);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home/index.html',
                controller: 'homeController'
            })
            .when('/wedding', {
                templateUrl: 'views/wedding/index.html',
                controller: 'weddingController'
            })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(false);
    }

})();