'use strict';

(function () {
    function HeroDetailController($scope, Hero, $rootRouter) {
        this.$routerOnActivate = function(next, previous) {
            var hero_id = next.params.id;  // Get the hero identified by the route parameter

            Hero.getHero(hero_id).then(function(data) {
                $scope.hero = data;
            });
        };

        $scope.save = function() {
            $rootRouter.navigate(['HeroList']);
        }
    }

    angular.module('my-app').component('heroDetail', {
        templateUrl: 'app/components/hero-detail/hero-detail.html',
        controller: HeroDetailController
    });
})();
