module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-coffee');
  
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    test: {
      files: ['test/**/*.js']
    },
    coffee: {
      app: {
        src: ['src/**/*.coffee'],
        dest: 'lib/'
      },
      tests: {
        src: ['test_src/**/*.coffee'],
        dest: 'test/'
      }
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'coffee');

};