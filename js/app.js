var app = angular.module('myGame', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',{        
        templateUrl: 'views/home.html',
        controller: 'backController1',
    })
    .when('/plot',{
        templateUrl: 'views/plot.html',
        controller: 'backController2',
    })
    .when('/ganondorf',{
        templateUrl: 'views/ganondorf.html',
        controller: 'backController3',
    })
    .when('/fight',{
        controller: 'backController4',
        templateUrl: 'views/fight.html',
    })
    .when('/win',{
        templateUrl: 'views/win.html',
        controller: 'backController5',
    })
    .when('/lose',{
        templateUrl: 'views/lose.html',
        controller: 'backController6',
    })
    .when('/lose1',{
        templateUrl: 'views/lose1.html',
        controller: 'backController7',
    })
    .otherwise({
        redirectTo: '/home',
        controller: 'backController1',
    });
});