'use strict';

(function () {
    angular.module('my-app', [
        'app.templates',
        'ngComponentRouter'
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .constant('Config', {
        API_URL: 'http://localhost:8989/',
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
