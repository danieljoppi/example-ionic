angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Companies', function($http) {
  // Might use a resource here that returns a JSON array
  var baseURL = "http://ec2-54-94-210-220.sa-east-1.compute.amazonaws.com/api/";
  var baseImageURL = baseURL+'image/';

  var companies = $http.get(baseURL + 'company').then(function (data) {
      return data.map(function (elem, ind) {
          return {id: ind, name: elem.name, url: baseImageURL + elem.image};
      });
  });

  return {
    all: function() {
      return companies;
    },
    get: function(companyId) {
      // Simple index lookup
      return companies[companyId];
    }
  }
});
