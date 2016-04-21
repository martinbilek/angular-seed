'use strict';

(function () {
    angular.module('my-app', [
        'ngComponentRouter'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: `
            <navigation></navigation>
            <ng-outlet></ng-outlet>
        `,
        $routeConfig: [
            {path: '/', name: 'Dashboard', component: 'dashboard', useAsDefault: true},
            {path: '/hero-list/', name: 'HeroList', component: 'heroList'},
            {path: '/hero-list/detail/:id', name: 'HeroDetail', component: 'heroDetail'},
        ]
    })
    .run(function ($rootScope) {
        console.log('my-app is running...');
    });
})();
