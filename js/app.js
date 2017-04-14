var app = angular.module('myGame', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',{        
        templateUrl: 'views/home.html',
        controller: 'backController',
    })
    .when('/plot',{
        templateUrl: 'views/plot.html',
        controller: 'backController',
    })
    .when('/ganondorf',{
        templateUrl: 'views/ganondorf.html',
        controller: 'backController',
    })
    .when('/fight',{
        controller: 'MainController',
        templateUrl: 'views/fight.html',
    })
    .when('/win',{
        templateUrl: 'views/win.html',
        controller: 'backController',
    })
    .when('/lose',{
        templateUrl: 'views/lose.html',
        controller: 'backController',
    })
    .otherwise({
        redirectTo: '/home',
        controller: 'backController',
    });
});

