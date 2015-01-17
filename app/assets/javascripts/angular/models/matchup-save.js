app.factory('MatchupSave', ['$resource',
  function($resource) {
    var matchupResource = $resource(
      '/matchups/:id',
      {id: '@id'},
      {update: {method: "PATCH"}}
    );
  return {
    createMatchup: function(matchup) {
      var newMatchup = new matchupResource(matchup);
      newMatchup.$save();
    }
  }
  }])