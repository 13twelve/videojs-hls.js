module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['browserify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'lib/vjs-hls.js',
                dest: 'debug/vjs-hls.js',
                options:  {
                    transform: ['babelify'],
                    browserifyOptions: {
                        debug: true
                    },
                    watch: true,
                    keepAlive: true
                }
            },
            dist: {
                src: 'lib/vjs-hls.js',
                dest: 'dist/vjs-hls.js',
                options:  {
                    transform: ['babelify'],
                    browserifyOptions: {
                        debug: false,
                    },
                    watch: false,
                    keepAlive: false,
                }
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: {
                    drop_console: true
                },
                beautify: false
            },
            dist: {
                files: {
                    'dist/vjs-hls.min.js': 'dist/vjs-hls.js'
                }
            }
        }
    });


    grunt.registerTask('build', 'build dist scripts', ['browserify:dist', 'uglify:dist']);


}
