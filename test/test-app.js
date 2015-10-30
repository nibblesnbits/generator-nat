'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('nat:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      '.bowerrc',
      '.gitignore',
      'gruntfile.js',
      'package.json',
      
      'app.js',
      'karma.conf.js',
      'protractor.conf.js',
      'README.md',
      'tsd.json',
      
      'bin/www',
      
      'routes/index.js',
      
      'test/e2e/home.spec.ts',
      
      'test/unit/controllers/homeController.test.ts',
      'test/unit/directives/directives.test.ts',
      'test/unit/filters/momentFilter.test.ts',
      'test/unit/mocks.ts',
      'test/unit/phantomHelpers.ts',
      
      'grunt/options/karma.js',
      'grunt/options/less.js',
      'grunt/options/ts.js',
      'grunt/options/watch.js',
      'grunt/tasks/default.js',
      
      'public/favicon.ico',
      'public/index.html',
      'public/assets/css/styles.less',
      
      'public/app/declarations.ts',
      'public/app/config.ts',
      'public/app/app.ts',
      'public/app/common/common.ts',
      'public/app/common/directives.ts',
      'public/app/common/filters.ts',
      'public/app/common/logging.ts',
      'public/app/common/services.ts',
      'public/app/data/dataService.ts',
      'public/app/home/homeController.ts',
      'public/app/home/home.html',
      'public/app/layout/shellController.ts',
      'public/app/layout/shell.html',
      'public/app/templates/myTemplateDirective.html'
    ]);
  });
});
