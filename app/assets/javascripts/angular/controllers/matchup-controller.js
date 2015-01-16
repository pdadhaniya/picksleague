app.controller('MatchupController', ['$scope', 'Team',
  function($scope, Team) {
    $scope.teams = Team.teams.query();
  }])