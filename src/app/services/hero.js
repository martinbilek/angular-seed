'use strict';

function HeroService($q, $http, Config) {

    var service = {};

    service.getHeroes = function() {
        return $http.get(Config.API_URL + 'heroes/');
    }

    service.getHero = function(id) {
        return $http.get(Config.API_URL + 'heroes/' + id);
    }

    service.saveHero = function(hero) {
        return $http.post(Config.API_URL + 'heroes/' + hero.id, hero);
    }

    return service;
}

angular.module('my-app').factory('Hero', HeroService);
