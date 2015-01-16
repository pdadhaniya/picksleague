app.controller('NewMatchupController', ['$scope', '$location', 'Team', 'Matchup',
  function($scope, $location, Team, Matchup) {
    $scope.teams = Team.teams.query();
    $scope.viewMatchups = function() {
      $location.path('/matchups/')
    }
  }])