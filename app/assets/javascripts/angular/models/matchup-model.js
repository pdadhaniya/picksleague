app.factory('Matchup', ['$resource',
  function($resource) {
    return $resource('/matchups/:id', {id: '@id'}, {
      getWeek: {
        method: 'get',
        url: '/matchups/get_week',
        isArray: true
      }
    });
  }]);