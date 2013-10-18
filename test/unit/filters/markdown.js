/*global describe, beforeEach, it, angular, inject */

'use strict';

describe('Filter: markdown', function() {
  var markdown;
  
  beforeEach(module('cm'));
  
  beforeEach(inject(function(_markdown_) {
    markdown = _markdown_;
  }));
  
  it('Should compile markdown to html', function() {
    console.log('there');
  });
    
});