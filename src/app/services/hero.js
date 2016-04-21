'use strict';

var _HEROES = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];

function HeroService($q) {

    var service = {};

    service.getHeroes = function() {
        return $q.when(_HEROES);
    }

    service.getHero = function(id) {
        for (let hero of _HEROES) {
            if (hero.id == id) {
                return $q.when(hero);
            }
        }
    }

    return service;
}

angular.module('my-app').factory('Hero', HeroService);
