app.controller('MatchupController', ['$scope', 'Team', 'Matchup',
  function($scope, Team, Matchup){
    $scope.allMatchups = Matchup.allMatchups.query();
  }])