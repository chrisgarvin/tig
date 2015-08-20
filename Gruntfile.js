module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['js/libs/*.js', 'js/app.js'],
        dest: 'js/build/app.min.js'
      }
    },
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'compressed'
        },
        files: { // Dictionary of files
          'css/build/style.css': 'css/style.scss'
        }
      }
    },
    imagemin: {                          // Task
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'img/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'img/'                  // Destination path prefix
      }]
    }
  },
    watch: {
      css: {
        files: 'css/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
      scripts: {
        files: ['js/*.js', 'js/build.*.js'],
        tasks: ['uglify']
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'imagemin', 'connect', 'watch']);

};
