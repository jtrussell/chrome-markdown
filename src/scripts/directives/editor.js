/*global angular */

'use strict';

angular.module('cm').directive('editor', [function() {
  return {
    restrict: 'AE',
    template: '<div ui-ace></div>',
    replace: true,
    link: function(scope, element, attrs) {
      // ...
    }
  };
}]);
