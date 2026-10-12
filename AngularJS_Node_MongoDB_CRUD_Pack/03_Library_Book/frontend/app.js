var app = angular.module('labApp', []);

app.controller('MainController', function($scope, $http) {
  var api = '/api/book';

  $scope.items = [];
  $scope.form = {};
  $scope.editing = false;
  $scope.success = '';
  $scope.error = '';

  function clearMessages() {
    $scope.success = '';
    $scope.error = '';
  }

  function load() {
    $http.get(api).then(function(response) {
      $scope.items = response.data;
    }, function() {
      $scope.error = 'Could not load records. Check the server and MongoDB.';
    });
  }

  $scope.save = function() {
    clearMessages();

    if ($scope.recordForm.$invalid) {
      $scope.error = 'Please fill all required fields correctly.';
      return;
    }

    var request;
    if ($scope.editing) {
      request = $http.put(api + '/' + $scope.form._id, $scope.form);
    } else {
      request = $http.post(api, $scope.form);
    }

    request.then(function(response) {
      $scope.success = $scope.editing ? 'Record updated successfully.' : 'Record added successfully.';
      $scope.form = {};
      $scope.editing = false;
      load();
    }, function(response) {
      $scope.error = (response.data && response.data.error) || 'Operation failed.';
    });
  };

  $scope.edit = function(item) {
    clearMessages();
    $scope.form = angular.copy(item);
    $scope.editing = true;
    window.scrollTo(0, 0);
  };

  $scope.cancelEdit = function() {
    $scope.form = {};
    $scope.editing = false;
    clearMessages();
  };

  $scope.remove = function(id) {
    clearMessages();
    if (!confirm('Delete this record?')) return;

    $http.delete(api + '/' + id).then(function() {
      $scope.success = 'Record deleted successfully.';
      load();
    }, function(response) {
      $scope.error = (response.data && response.data.error) || 'Delete failed.';
    });
  };

  load();
});
