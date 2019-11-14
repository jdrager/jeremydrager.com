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