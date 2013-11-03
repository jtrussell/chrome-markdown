/*global angular */

'use strict';

angular.module('cm').directive('preview', [function() {
  return {
    restrict: 'AE',
    template: [
      '<div>',
        '<div class="block"',
            'ng-repeat="md in getMdChunks()">',
          '<div class="block-guts" ',
              'ng-bind-html-unsafe="md | markdown">',
        '</div>',
        '<div class="block-footer">',
          '<span class="block-num">{{index + 1}}</span>',
        '</div>',
      '</div>'
    ].join(''),
    replace: true,
    link: function(scope, element, attrs) {
      element.addClass('basic');
      
      scope.getMdChunks = function() {
        return (scope[attrs.markup] || '').split(/(?:\r?\n){3,}/);
      };
    }
  };
}]);