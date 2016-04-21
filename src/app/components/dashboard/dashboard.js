'use strict';

(function () {
    function DashboardController($scope, Hero) {
        Hero.getHeroes().then(function(data) {
            $scope.heroes = data.slice(0, 3);
        });
    }

    angular.module('my-app')
        .component('dashboard', {
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: DashboardController
        });
})();
