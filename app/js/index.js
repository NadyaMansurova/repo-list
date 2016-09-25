var angular = require('angular');
require('restangular');

var app = angular.module('repoList', ['restangular']).config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://api.github.com/');
  RestangularProvider.setRequestSuffix('/repos');
});

require('./search-module/SearchController');
require('./search-module/SearchModel');
