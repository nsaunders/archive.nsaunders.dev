module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        copy: {
            images: {
                files: [
                    {
                        src: ["**/*.*", "*"],
                        dest: "dist/img/",
                        expand: true,
                        cwd: "src/img"
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "dist/index.html": "src/index.html"
                }
            }
        },
        less: {
            dist: {
                options: {
                    compress: true
                },
                files: {
                    "dist/css/main.css": "src/css/main.less"
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    "dist/js/daylight-photo-manager.js": "src/js/daylight-photo-manager.js",
                    "dist/js/location.js": ["src/js/location.js"],
                    "dist/js/nav.js": ["src/js/nav.js"],
                    "dist/js/specials-schedule.js": ["src/js/specials-schedule.js"]
                }
            }
        }
    });

    grunt.registerTask("default", ["copy", "htmlmin", "less", "uglify"]);
};