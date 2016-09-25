var angular = require('angular');
var _ = require('lodash');

angular.module('repoList')
.factory('SearchModel', SearchModel);

function SearchModel(Restangular) {
  return Restangular.service('users');
}

SearchModel.$inject = ['Restangular'];
