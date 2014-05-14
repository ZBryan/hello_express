module.exports =function(grunt){

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);



grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],

    copy: {
      all: {
        expand: true,
        cwd: 'src/',
        src: ['*.css', '*.html', '/images/**/*', '!Gruntfile.js'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
    },

     browserify: {
      all: {
        src: 'src/*.js',
        dest: 'dist/app.js'
      },
      options: {
        transform: ['debowerify'],
        debug: true
      }
    },

    simplemocha: {
    options: {
      globals: ['should'],
      timeout: 3000,
      ignoreLeaks: false,
      ui: 'bdd',
      reporter: 'tap'
    },

    all: { src: ['test/unit/*.js'] }
  },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', '!test/**/*.js'],
      options: {
        jshintrc: true,
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      },
    },

	express: {
		options: {

		},
		dev: {
			options: {
				script: 'server.js'
			}
		},
		prod: {
			options: {
				script: 'server.js',
				node_env: 'production'
			}
		},
		test: {
			options: {
				script: 'server.js'
			}
		}
	},

	casper: {
		acceptance : {
			options : {
				test : true,
			},
			files : {
				'test/acceptance/casper-results.xml' : ['test/acceptance/*_test.js']
			}
		}
	},

	connect: {
      options: {
        port: process.env.PORT || 3030,
        base: 'dist/',
      },

      all: {},
    },

	watch: {
      options: {
        livereload: {
        	port: 9000
        },
      },

      html: {
        files: '<%= copy.all.src %>',
      },

      js: {
        files: '<%= browserify.all.src %>',
        tasks: ['browserify'],
      },

      assets: {
        files: ['assets/**/*', '*.css', 'images/**/*', 'img/**/*', '!Gruntfile.js'],
        tasks: ['copy'],
      }
    }
});


grunt.registerTask('test', ['express:dev', 'casper', 'simplemocha']);
grunt.registerTask('default', ['jshint', 'test']);
grunt.registerTask('build', ['clean', 'copy', 'browserify']);
grunt.registerTask('server', ['default', 'connect', 'watch']);

};
