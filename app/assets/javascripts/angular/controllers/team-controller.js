app.controller('TeamController', ['$scope', '$routeParams', '$location', 'Team',
  function($scope, $routeParams, $location, Team) {
    $scope.teams = Team.teams.query();
    $scope.selectTeam = function(team) {
      $location.path('/teams/' + team.id);
    }
  }]);