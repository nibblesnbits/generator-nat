'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine ' + chalk.red('node-angular-typescript') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What is the name of your app?',
      default: 'myApp'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },
  scaffoldFolders: function(){
      this.mkdir("app");
      this.mkdir("bin");
      this.mkdir("grunt");
      this.mkdir("grunt/options");
      this.mkdir("grunt/tasks");
      this.mkdir("public");
      this.mkdir("public/assets");
      this.mkdir("public/assets/css");
      this.mkdir("public/app");
      this.mkdir("public/app/common");
      this.mkdir("public/app/data");
      this.mkdir("public/app/layout");
      this.mkdir("public/app/templates");
      this.mkdir("routes");
      this.mkdir("test");
      this.mkdir("test/e2e");
      this.mkdir("test/unit");
      this.mkdir("test/unit/directives");
      this.mkdir("test/unit/filters");
      this.mkdir("test/unit/controllers");
  },
  writing: {
    app: function () {
      // bower/npm/etc
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        this.props
      );
      this.fs.copy(
        this.templatePath('_bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('_gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_gruntfile.js'),
        this.destinationPath('gruntfile.js')
      );
      copyAll.apply(this,[[
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
      ]]);
    }
  },

  install: function () {
    this.installDependencies();
  }
});

function copyAll(files) {
  var yo = this;
  files.forEach(function(file) {
      yo.fs.copy(
        yo.templatePath(file),
        yo.destinationPath(file)
      );
  });
}
