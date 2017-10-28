module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass:dist', 'cssmin']
            },
            browserSync: {
                files: ['sass/*.scss', 'js/*.js'],
                tasks: ['browserSync']
            }
            // concat: {
            //     files: ['public/js/*.js'],
            //     tasks: ['concat']
            // }
            // uglify: {
            //     files: ['public/js/*.js'],
            //     tasks: ['uglify']
            // }
        },
        sass: {
            dist: {
                files:{
                'public/css/main.css' :'sass/style.scss'
                },
                options: {
                    // sourcemap: 'true'
                }
            }
        },
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'public/css',
                src: ['*.css', '!*.min.css'],
                dest: 'public/css',
                ext: '.min.css'
              }]
            }
          },
          concat: {
            dist: {
                src: ['public/js/*.js', '!public/js/built.js'],
                dest: 'public/js/built.js',
              }
          },
          uglify: {
              options: {

              },
            my_target: {
              files: {
                // 'public/js/components.min.js': ['public/js/components.js'],
                'public/js/main.min.js': ['public/js/main.js'],
                'public/js/react-dom.min.js': ['public/js/react-dom.js'],
                'public/js/react.min.js': ['public/js/react.js'],
                'public/js/browser.min.js': ['public/js/browser.min.js'],
              }
            }
          },
          browserSync: {
            dev: {
              bsFiles: {
                src: 'public/**/*.{js,css}'
              },
              options: {
                proxy: 'localhost:3000'
              }
            }
          }
    });
    grunt.registerTask('default', ['watch', 'browserSync']);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
};