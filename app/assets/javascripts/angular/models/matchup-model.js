app.factory('Matchup', ['$resource',
  function($resource) {
    var matchups = $resource(
      '/matchups/get_matchups'
    );
  return {
    allMatchups: matchups
  }
  }])