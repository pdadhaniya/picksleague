app.controller('NewMatchupController', ['$scope', '$location', 'Team', 'Matchup', 'MatchupSave',
  function($scope, $location, Team, Matchup, MatchupSave) {
    $scope.teams = Team.teams.query();
    $scope.viewMatchups = function() {
      $location.path('/matchups/');
    };
    // $scope.week = "";
    $scope.newMatchup = function(game) {
      MatchupSave.createMatchup({matchup: {week: game.week, home_team_id: game.home_team.id, away_team_id: game.away_team.id}});
    };
    // $scope.weeks = [
    //   {week: 1},
    //   {week: 2},
    //   {week: 3},
    //   {week: 4},
    //   {week: 5},
    //   {week: 6},
    //   {week: 7},
    //   {week: 8},
    //   {week: 9},
    //   {week: 10},
    //   {week: 11},
    //   {week: 12},
    //   {week: 13},
    //   {week: 14},
    //   {week: 15},
    //   {week: 16},
    //   {week: 17}
    // ]
    $scope.weeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  }])