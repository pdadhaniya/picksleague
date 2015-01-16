app.controller('HomeController', ['$scope', 'Team',
  function($scope, Team) {
    $scope.teams = Team.teams.query();
}]);