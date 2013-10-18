/*global angular, marked */

'use strict';

angular.module('cm').filter('markdown', function() {
  return function(input) {
    return marked(input);
  };
});