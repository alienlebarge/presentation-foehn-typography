module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
      options: {
        base: '.'
      },
      src: ['**']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task(s).
  grunt.registerTask('default', ['gh-pages']);

};
