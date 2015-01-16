app.factory('Matchup', ['$resource',
  function($resource) {
    var matchup = $resource(
      '/matchups/:id',
      {id: '@id'},
      {update: {method: "PATCH"}}
    );
    var matchups = $resource(
      '/matchups/get_matchups'
    );
  return {
    allMatchups: matchups,
    matchup: matchup,
    createMatchup: function(game) {
      var oneMatchup = new matchup(game);
      oneMatchup.$save(function(data) {
        // $location.path("/matchups/" + data.id);
      });
    }
  }
  }])