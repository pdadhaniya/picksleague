app.controller('MatchupController', ['$scope', 'Team', 'Matchup',
  function($scope, Team, Matchup){
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
    ];
    $scope.getWeek = function(selected) {
      Matchup.getWeek({week:selected.week}, function(data) {
        $scope.weeklyMatchup = data;
      });
    };
  }])