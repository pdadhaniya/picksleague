app.controller('NewMatchupController', ['$scope', '$location', 'Team', 'Matchup',
  function($scope, $location, Team, Matchup) {
    $scope.teams = Team.teams.query();
    $scope.viewMatchups = function() {
      $location.path('/matchups/')
    }
    $scope.create = function(game) {
      Matchup.createMatchup({matchup: {week: 1, away_team_id: game.away_team.id, home_team_id: game.home_team.id}});
    };
  }])