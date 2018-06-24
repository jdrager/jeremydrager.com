function smoothScroll(toTarget, toHome, duration) {
    if (window.location.hash != '#/' && toHome) {
        window.location.hash = '#/';
        setTimeout(function () {
            $('body, html').animate({ scrollTop: $(toTarget).offset().top }, duration, 'easeOutQuad');
        }, 500);
    }
    else {
        $('body, html').animate({ scrollTop: $(toTarget).offset().top }, duration, 'easeOutQuad');
    }
};
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
(function () {
    'use strict';

    angular
        .module('jeremy')
        .controller('homeController', function ($scope, $controller) {

            $scope.load = function () {
                $controller('baseController', { $scope: $scope });

                $('body').removeClass('wedding').addClass('main');

                $('meta[name=theme-color]').attr("content", "#1976D2");

                $(".main nav .button-collapse").sideNav({
                    menuWidth: 300,
                    edge: 'left',
                    closeOnClick: true
                });
                $(".side-nav a").click(function () {
                    $('.button-collapse').sideNav('hide');
                });

                $(window).scroll(function () {
                    if ($(document).scrollTop() > 100) {
                        $('.scroll-to-top').removeClass('out');
                    }
                    else {
                        $('.scroll-to-top').addClass('out');
                    }
                });

                $('.brand-logo').text("Jeremy Drager");
            };
            $scope.load();
        });
})();
(function () {
    'use strict';

    angular
        .module('jeremy')
        .controller('weddingController', function ($scope, $controller) {

            $scope.load = function () {
                $controller('baseController', { $scope: $scope });

                $('body').removeClass('main').addClass('wedding');

                $('meta[name=theme-color]').attr("content", "#3D6799");

                //$(".wedding-nav .nav-wrapper .button-collapse").sideNav({
                //    menuWidth: 300,
                //    edge: 'left',
                //    closeOnClick: true
                //});
                //$(".side-nav a").click(function () {
                //    $('.button-collapse').sideNav('hide');
                //});

                $(window).scroll(function () {
                    if ($(document).scrollTop() > 100) {
                        $('.scroll-to-top').removeClass('out');
                    }
                    else {
                        $('.scroll-to-top').addClass('out');
                    }
                });

                $('.brand-logo').text("Jeremy & Melissa's Wedding");

                var items = [
                    "Get In, Loser.  We're Getting Married.",
                    "Jeremy ❤ Melissa",
                    "Melissa ❤ Jeremy",
                    "Brace yourself: Marriage is Coming",
                    "Jeremy & Melissa Gettin' Married",
                    "#GETHYPE",
                    "🚹 + 🚺"
                ];

                $scope.heroText = items[Math.floor(Math.random() * items.length)];

                $('.tooltipped').tooltip({ delay: 50 });
            };

            $scope.$on('$viewContentLoaded', function () {
                $('.parallax-container.first .parallax img').css({ 'background-image': 'url(../img/wedding/' + (Math.floor(Math.random() * 10) + 1) + '.jpg)' });
            });

            $scope.load();
        });
})();