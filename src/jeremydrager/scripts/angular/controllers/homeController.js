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