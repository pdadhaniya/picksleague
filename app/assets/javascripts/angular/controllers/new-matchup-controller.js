app.controller('NewMatchupController', ['$scope', '$location', 'Team', 'Matchup',
  function($scope, $location, Team, Matchup) {
    $scope.teams = Team.teams.query();
    $scope.viewMatchups = function() {
      $location.path('/matchups/')
    }
    $scope.week = "";
    $scope.create = function(game) {
      Matchup.createMatchup({matchup: {week: $scope.week.week, away_team_id: game.away_team.id, home_team_id: game.home_team.id}});
      console.log(game)
    };
    $scope.weeks = [
      {week: 1},
      {week: 2},
      {week: 3},
      {week: 4},
      {week: 5},
      {week: 6},
      {week: 7},
      {week: 8},
      {week: 9},
      {week: 10},
      {week: 11},
      {week: 12},
      {week: 13},
      {week: 14},
      {week: 15},
      {week: 16},
      {week: 17}
    ]
  }])