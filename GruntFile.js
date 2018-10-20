module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		postcss: {
			options: {
				processors: [
					require('pixrem'),
					require('autoprefixer')({browsers: ['> 0%']}),
					require('postcss-flexboxfixer'),
					require('postcss-custom-properties')({preserve: false}),
					require('cssnano')({autoprefixer: false, zindex: false})
				]
			},
			bb: {
				files: [{
					expand: true,
					flatten: true,
					cwd: './',
					src: ['*.css', '!**/variables.css'],
					dest: 'public/assets/css/'
				}]
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['@babel/preset-env']
			},
			dist: {
				files: [{
					expand: true,
					flatten: true,
					cwd: './',
					src: ['*.js', '!**/GruntFile.js'],
					dest: 'public/assets/js/'
				}]
			}
		},
		watch: {
			styles: {
				files: [
					'./*.css'
				],
				tasks: ['postcss:bb']
			}
		}
	});
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ["watch:styles"]);
	grunt.registerTask('bb', ["postcss:bb", "babel"]);
};
