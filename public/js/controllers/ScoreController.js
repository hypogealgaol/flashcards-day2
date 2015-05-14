app.controller('StatsController', function($scope, ScoreFactory) {
    $scope.scores = ScoreFactory; //inject score factory object under score

}); 