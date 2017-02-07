(function(angular) {
  'use strict';

  var _STEP = [
      {number: 1, name: 'Step 1'}
    , {number: 2, name: 'Step 2'}
    , {number: 3, name: 'Step 3'}
    , {number: 4, name: 'Step 4'}
    , {number: 5, name: 'Step 5'}
  ];

  angular.module('app').constant('constWorkflow', _STEP);

})(angular);
