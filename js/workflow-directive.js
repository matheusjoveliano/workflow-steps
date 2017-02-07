(function(angular) {
  'use strict';

  var directive = function (constWorkflow) {
    var workflows = constWorkflow;

    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: '../directive/directive.html',
      scope: {number: '@'},
      controller: function($scope) {
        $scope.workflows = workflows.slice(0, $scope.number);
      }
    };
  };

  angular.module('dir-workflow', []).directive('workflow', directive);

})(angular);
