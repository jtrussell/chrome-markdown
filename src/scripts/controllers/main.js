/*global angular */
angular.module('cm').controller('MainCtrl', ['$scope', function($scope) {
  $scope.markdown_content = [
    '# Hello World',
    '- super',
    '- awesome',
    '- list',
    '\n',
    '# Second page',
    '```',
    '// Heyo some code',
    '```'
  ].join('\n');
}]);