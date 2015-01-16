app.controller('OneTeamController', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    $scope.oneTeam = Team.teams.get({id: $routeParams['id']});
  }]);