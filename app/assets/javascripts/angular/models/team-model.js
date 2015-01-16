app.factory('Team', ['$resource',
  function($resource) {
    var teams = $resource(
      '/teams/:id',
      {id: '@id'}
    );
  return {
    teams: teams
  }
  }]);