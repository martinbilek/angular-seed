'use strict';

(function () {
    function HeroListController($scope, Hero, $rootRouter) {
        $scope.selectedHero = null;

        Hero.getHeroes().then(function(data) {
            $scope.heroes = data.data;
        });

        $scope.onSelect = function(hero) {
            if ($scope.selectedHero == hero) {
                $scope.selectedHero = null;
            } else {
                $scope.selectedHero = hero;
            }
        }

        $scope.gotoDetail = function() {
            $rootRouter.navigate(['HeroDetail', {id: $scope.selectedHero.id}]);
        }
    }

    angular.module('my-app').component('heroList', {
        templateUrl: 'app/components/hero-list/hero-list.html',
        controller: HeroListController
    });
})();
