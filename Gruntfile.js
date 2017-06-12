/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/
'use strict'



module.exports = function(grunt) {
var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    responsive_images: {

      profilePic: {
        options: {
          engine: 'im',
          sizes: [{
            width: 100,
            suffix:'_large_2x',
            quality:30,
          }, {
            width: 50,
            suffix:'_large_1x', // ---> Use when you need this size -- it is one si
            quality:50,
          }]
        }, files: [{
                  expand: true,
                  src: ['*.{gif,jpg,png}'],
                  cwd: 'images_src/',
                  dest:'images/',
          }]
      },

      projectPic: {
        options: {
          engine: 'im',
          sizes: [{
            width:600,
            suffix:'_large_2x',
            quality:30,
          }, {
            width:300,
            suffix:'_large_1x', // ---> Use when you need this size -- it is one si
            quality:50,
          }]
        }, files: [{
                  expand: true,
                  src: ['*.{gif,jpg,png}'],
                  cwd: 'images_src/',
                  dest:'images/',
          }]
      },

      pizzeriaPic: {
        options: {
          engine: 'im',
          sizes: [{
            width: 500,
            suffix:'_large_2x',
            quality:30,
          }, {
            width: 100,
            suffix:'_large_1x', // ---> Use when you need this size -- it is one si
            quality:50,
          }]
        }, files: [{
                  expand: true,
                  src: ['*.{gif,jpg,png}'],
                  cwd: 'views/images_src/',
                  dest:'views/images/',
          }]
      },

      pizzaPic: {
        options: {
          engine: 'im',
          sizes: [{
            width: 200,
            suffix:'_large_2x',
            quality:20,
          }, {
            width: 100,
            suffix:'_large_1x', // ---> Use when you need this size -- it is one si
            quality:50,
          }]
        }, files: [{
                  expand: true,
                  src: ['*.{gif,jpg,png}'],
                  cwd: 'views/images_src/',
                  dest:'views/images/',
          }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/',
        }]
      },
      images: {
        files: [{
          expand: true,
          src: 'images/*.{gif,jpg,png}',
          dest: 'dist/',
        }]
      },
      images_src: {
        files: [{
          expand: true,
          src: 'images_src/*.{gif,jpg,png}',
          dest: 'dist/',
        }]
      },
      views: {
        files: [{
          expand: true,
          src: 'views/images/*.{gif,jpg,png}',
          dest: 'dist/',
        }]
      },
      views_img_src: {
        files: [{
          expand: true,
          src: 'views/images_src/*.{gif,jpg,png}',
          dest: 'dist/',
        }]
      },
      viewsjs: {
        files: [{
          expand: true,
          src: 'views/js/main.js',
          dest: 'dist/',
        }]
      }


    },

    /* In case I need to do some work with pictures*/
    imagemin: {                          // Task
      static: {                          // Target
        options: {                       // Target options
          optimizationLevel: 7,
          svgoPlugins: [{ removeViewBox: false }],
          use: [mozjpeg()]
        },
        files: {                         // Dictionary of files
          'images/img.png': 'images_src/img.png', // 'destination': 'source'
          'images/img.jpg': 'images_src/img.jpg',
          'images/img.gif': 'images_src/img.gif'
        }
      },
      dynamic: {                         // Another target
        options: {                       // Target options
          optimizationLevel: 7,
        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'images/'                  // Destination path prefix
        }]
      }
    },

    critical: {
     dist: {
       options: {
         base: './'
       },
       // The source file
       src: 'index_src.html',
       // The destination file
       dest: 'index.html',
       }
     },

     htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        },
       files: {
         'dist/index.html': 'index.html',     // 'destination': 'source'
         'dist/css/style.css': 'css/style.css',
         'dist/css/print.css': 'css/print.css',
         'dist/js/perfmatters.js' : 'js/perfmatters.js',
         'dist/project-2048.html' : 'project-2048.html',
         'dist/project-mobile.html' : 'project-mobile.html',
         'dist/project-webperf.html' : 'project-webperf.html'
       }
     },
     view: {
       options: {
         removeComments: true,
         collapseWhitespace: true,
         minifyCSS: true,
         minifyJS: true
       },
      files: {
        'dist/views/pizza.html': 'views/pizza.html',
        'dist/views/css/style.css': 'views/css/style.css',
        'dist/views/css/bootstrap-grid.css': 'views/css/bootstrap-grid.css'
      }
    }

    },

    jshint: {
      all: ['js/*.js', 'views/**/*.js'],
      reporterOutput: "",
    },

  });

   grunt.loadNpmTasks('grunt-responsive-images');
   grunt.loadNpmTasks('grunt-imagemagick');
   grunt.loadNpmTasks('grunt-critical');
   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-clean'); //COMMENT --> this is out because we can only run 1 file at the time to get 1x pics. also because we dont want to
   grunt.loadNpmTasks('grunt-contrib-copy');  //            delete, make dir, copy AGAIN that is why the tasks are out. 'imagemin:dynamic', 'imagemin:dynamic',
   grunt.loadNpmTasks('grunt-mkdir');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.registerTask('default', ['critical','htmlmin:dist','clean', 'mkdir', 'copy', 'responsive_images:profilePic',
                      'responsive_images:projectPic','responsive_images:pizzeriaPic','responsive_images:pizzaPic',
                      'htmlmin:view', 'copy:images', 'copy:views', 'copy:viewsjs', 'copy:views_img_src', 'copy:images_src','jshint:all']);

};
