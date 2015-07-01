angular.module('myApp', [])


.directive('myUserEditDirective', function() {
  return {
    templateUrl: '../partials/my-user-edit-directive.html',
    restrict: 'A',
    scope: {
      currentUser: '=',
      myScopeFunction: '&',
      myScopeReadOnlyVariable: "@"
    },
    controller:'MyDirectiveController',
    link: function(scope, element, attributes) {
      console.log(attributes)
    },
    transclude: true
  }
})

.controller('MyDirectiveController', function($scope) {
  $scope.isDisplaying = true;
  $scope.onEditAction =  function() {
    $scope.isDisplaying = !$scope.isDisplaying;
  }
})

.controller('MyCtrl1', function() {
  this.isDisplayingUserOne = true;
  this.userOne = {
    firstName: "George",
    lastName: "Washington"
  };

  this.userTwo = {
    firstName: "Abraham",
    lastName: "Lincoln"
  }

  this.userThree = {
    firstName: "Thomas",
    lastName: "Jefferson"
  }

  this.testFunction = function() {
    alert('Hello World');
  }


});
