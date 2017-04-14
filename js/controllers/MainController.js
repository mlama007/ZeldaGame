app.controller('MainController', ['$scope', function($scope){
    $scope.link = {
        life: 100,
        spin: 20,
        jump_attack: 30,
        slash: 40,
        missed: 0
    },
    $scope.ganon = {
        life: 100,
        Dash: 20,
        Smash: 30,
        Flame: 40,
        missed: 0
    }
    $scope.success = {
        First: 'Your attack did some damage',
        Second: 'You got him!',
        Third: 'Ganondorf is really hurt!'
    }
    $scope.fail = {
        First: 'You missed!',
        Second: 'He evaded your attack.',
    }
    $scope.hurt = {
        First: 'Ganondorf got a hit!',
        Second: 'You took a lot of damage.',
    }
}]);

