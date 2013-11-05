/*global angular */

'use strict';

// Look here for available themes:
// https://github.com/ajaxorg/ace/tree/master/lib/ace/theme

angular.module('cm').directive('editor', [function() {
  return {
    restrict: 'AE',
    template: '<div ui-ace="{mode: \'markdown\', theme: \'tomorrow_night\'}"></div>',
    replace: true,
    link: function(scope, element, attrs) {
      // ...
    }
  };
}]);
