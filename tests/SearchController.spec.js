describe("SearchController", function() {
  var expect = chai.expect;

  var SearchController = null,
      scope = null;

  beforeEach(function(){
    angular.mock.module('repoList');
  });

  beforeEach(function(){
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      SearchController = $controller('SearchController', {
        $scope: scope
      });
    });
  });

  it('is exist', function () {
    expect(SearchController).to.be.an('object');
  });

  beforeEach(function(){
    scope.user = 'User';
    var data = {
      plain: function(){
        return [];
      }
    }
    scope.updateList(data);
  });

  it('empty response returns error message', function () {
    expect(scope.error).to.equal('User User has no repos');
  });
  it('empty response returns empty array', function () {
    expect(scope.repos).to.be.an('array');
  });
  it('empty response returns empty repo array', function () {
    expect(scope.repos.length).to.equal(0);
  });

});
