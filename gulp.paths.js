module.exports.js = [
  'app/src/bower_components/angular/angular.min.js',
  'app/src/bower_components/ui-router/release/angular-ui-router.min.js',
  'app/src/bower_components/angular-animate/angular-animate.min.js',
  'app/src/bower_components/angular-aria/angular-aria.min.js',
  'app/src/bower_components/angular-material/angular-material.min.js',
  'app/src//bower_components/a0-angular-storage/dist/angular-storage.min.js',
  'app/src/bower_components/angular-jwt/dist/angular-jwt.min.js',
  'app/src/scripts/app.js',
  'app/src/scripts/factorys/*.js',    
  'app/src/scripts/controllers/*.js',
  'app/src/scripts/directives/**/*.js'
];

module.exports.css = [
  'app/src/stylesheets/style.css',
  'app/src/bower_components/angular-material/angular-material.min.css'
];

module.exports.prodTasks = ['css' ,'scriptprod',
  'html-min','directives',
  'html-partials-min'
];

module.exports.devTaks = ['watch','css' ,'scripts',
  'html-min','directives',
  'html-partials-min','html'
];

module.exports.defultTaks = ['watch','css' ,'scripts',
  'html-min','directives',
  'html-partials-min','html','serve'
];
