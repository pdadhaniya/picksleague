app.controller('HomeController', ['$scope', '$location',
  function($scope, $location) {
    $scope.viewTeams = function() {
      $location.path("/teams/");
    };
    $scope.viewAddMatchup = function() {
      $location.path("/matchup");
    }
}]);