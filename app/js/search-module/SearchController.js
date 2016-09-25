var angular = require('angular');

angular.module('repoList')
.controller('SearchController', SearchController);

function SearchController($scope, SearchModel) {
  $scope.user = '';
  $scope.onValidate = function(){
  };
  $scope.onInputKeypress = function($event){
    if ($event.which === 13){
      $scope.onRepoSearch();
    }
  };
  $scope.onRepoSearch = function(){
    $scope.repos = [];
    $scope.error = undefined;
    SearchModel.one($scope.user).get().then($scope.updateList, $scope.processError);
  };

  $scope.updateList = function(data){
    $scope.repos = data.plain();
    if (!$scope.repos || $scope.repos.length === 0 || !_.isArray($scope.repos)) {
      $scope.repos = [];
      $scope.error = 'User ' + $scope.user + ' has no repos';
    }
  };

  $scope.processError = function(err){
    if (err.status == 404){
      $scope.error = 'User ' + $scope.user + ' does not exist';
    } else {
      $scope.error = 'Github API does not respond';
    }
  };
};

SearchController.$inject = ['$scope', 'SearchModel'];
